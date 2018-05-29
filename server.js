const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/public`));
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/public`);
});
app.listen(PORT, () => {
  console.log("Server is running");
});
