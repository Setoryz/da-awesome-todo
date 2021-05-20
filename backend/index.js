const express = require("express");
const app = express();
const PORT = 5000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  console.log(`⚡️ Server running at https://localhost:${PORT}`);
});
