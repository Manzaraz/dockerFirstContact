const expres = require("express");
const app = expres();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Welcome to Docker World, pirate the world!",
    version: "1.0.0",
  });
});

app.listen(port);
console.log(`Server is running on port  ${port}`);
