# Timestamp Converter

A full-stack timestamp converter built with **React**, **Node.js**, and **Express**.

The application accepts a date or Unix timestamp and converts it into multiple useful date and time formats.

## Features

- Convert Unix timestamps to readable dates
- Convert date strings to Unix timestamps
- Display Unix timestamps in milliseconds and seconds
- Display UTC and IST
- Display ISO 8601 format
- Display local date and time
- Provides a direct API URL for each conversion
- REST API built with Express
- React frontend served by the same Express server
- Responsive user interface

## Tech Stack

### Frontend

- React
- CSS

### Backend

- Node.js
- Express

### Development Tools

- Nodemon
- Concurrently

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/satyam-7777/Timestamp-Converter-FCC.git
cd Timestamp-Converter-FCC
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
npm --prefix client install
```

### 4. Run the application in development

```bash
npm run dev
```

This starts both the React development server and the Express backend.

- React frontend: `http://localhost:3000`
- Express backend: `http://localhost:8000`

Open the React frontend:

```text
http://localhost:3000
```

### 5. Build the application for production

```bash
npm run build
```

This creates the production React build inside:

```text
client/build
```

### 6. Start the production server

```bash
npm start
```

The Express server will serve both the React frontend and the API.

The application will be available at:

```text
http://localhost:8000
```

## API Endpoints

### Get Current Date and Time

```http
GET /api/
```

Example:

```text
http://localhost:8000/api/
```

Returns the current date and time.

### Convert a Date

```http
GET /api/:date
```

Example:

```text
http://localhost:8000/api/2022-04-12
```

### Convert a Unix Timestamp

```http
GET /api/:date
```

Example:

```text
http://localhost:8000/api/1451001600000
```

The API accepts Unix timestamps in milliseconds as well as date strings supported by JavaScript's `Date` constructor.

## Example Requests

### Date String

```text
GET /api/2022-04-12
```

### Unix Timestamp

```text
GET /api/1451001600000
```

### Current Date and Time

```text
GET /api/
```

## Example Response

```json
{
  "input": "1451001600000",
  "unix": 1451001600000,
  "unixSeconds": 1451001600,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT",
  "ist": "25 Dec 2015, 05:30:00",
  "iso": "2015-12-25T00:00:00.000Z",
  "local": "25/12/2015, 05:30:00"
}
```

## Error Response

If an invalid date or timestamp is provided, the API returns:

```json
{
  "error": "Invalid Date"
}
```

## License

This project is licensed under the ISC License.
