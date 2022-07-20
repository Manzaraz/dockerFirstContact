const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome to Docker World",
    version: "1.0.0",
  });
});

app.listen(port);
console.log(`Server is running on port  ${port}`);
