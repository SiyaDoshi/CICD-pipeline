const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("CICD pipeline is running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});