import { useState } from "react";
import { getResultItems } from "./utils/resultFields";

export default function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <main className="main-container">
        <TimestampSection
          result={result}
          error={error}
          setResult={setResult}
          setError={setError}
          setLoading={setLoading}
          loading={loading}
        />
        <ResultSection result={result} error={error} />
      </main>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="navbar">
      <h1>TIMESTAMP CONVERTER</h1>
      <p>Convert dates and Unix timestamps into readable date and time formats</p>
    </nav>
  );
}

function TimestampSection({ result, error, setResult, setError, setLoading, loading }) {
  const [timestamp, setTimestamp] = useState("");

  function handleOnChange(e) {
    setError(null);
    setResult(null);
    setLoading(false);
    setTimestamp(e.target.value);
  }

  function handleClear() {
    setResult(null);
    setError(null);
    setLoading(false);
    setTimestamp("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setResult(null);
      setLoading(true);
      const response = await fetch(`/api/${encodeURIComponent(timestamp)}`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error);
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="timestamp-section">
      <div className="section-card">
        <form onSubmit={handleSubmit}>
          <label className="input-label" htmlFor="timestamp">
            Date/Unix timestamp
          </label>
          <input
            type="text"
            name="timestamp"
            id="timestamp"
            className="input"
            placeholder="Enter date or Unix timestamp"
            value={timestamp}
            onChange={handleOnChange}
            required
          />
          <div className="btn-container">
            <button type="submit" className="btn submit-btn">
              {loading ? "Converting..." : "Convert"}
            </button>
            {(result || error) && (
              <button type="button" className="btn btn-clear" onClick={handleClear}>
                Clear
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function ResultSection({ result, error }) {
  let resultItems;

  if (!result && !error) return null;

  if (result) {
    resultItems = getResultItems(result);
  }

  return (
    <section className="result-section">
      <div className="section-card result">
        <h4 className="result-title">{error ? "Conversion Error" : "Timestamp Details"}</h4>

        {error ? (
          <p className="error-msg">{error}</p>
        ) : (
          resultItems.map((item) => (
            <ResultItem key={item.label} label={item.label} value={item.value} href={item.href} />
          ))
        )}
      </div>
    </section>
  );
}

function ResultItem({ label, value, href }) {
  return (
    <div className="result-item">
      <span>{label}</span>

      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <strong>{value}</strong>
      )}
    </div>
  );
}
