const express = require("express");
const cors = require("cors");
const path = require("path");

const timestampRouter = require("./routes/timestampRouter");

const app = express();

//global middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", timestampRouter);

app.all("/*splat", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: `This ${req.originalUrl} route is not available on the server.`,
  });
});

// Global error middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message,
  });
});

module.exports = app;
