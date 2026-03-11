const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "index.html"));
});

app.get("/quote:page", (req, res, next) => {
    const allowedPages = ["02", "03", "04"];

    const page = req.params.page;

    if (!allowedPages.includes(page)) {
        return next();
    }

    res.sendFile(path.join(process.cwd(), `quote${page}.html`));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(process.cwd(), "404.html"));
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});