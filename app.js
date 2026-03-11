const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

app.get("/quote02", (req, res) => {
    res.sendFile(path.join(process.cwd(), "quote02.html"));
});

app.get("/quote03", (req, res) => {
    res.sendFile(path.join(process.cwd(), "quote03.html"));
});

app.get("/quote04", (req, res) => {
    res.sendFile(path.join(process.cwd(), "quote04.html"));
});

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});