const express = require("express");

const app = express();

app.use(() => {
  console.log("helo");
  console.log("helo");
});

app.listen(4000);
