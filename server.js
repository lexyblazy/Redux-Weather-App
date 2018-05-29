const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
app.use(cors());

app.use(express.static(`${__dirname}/build`));
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});
app.listen(PORT, () => {
  console.log("Server is running");
});
