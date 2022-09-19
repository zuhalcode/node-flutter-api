const express = require("express");

const app = express();

app.use(() => {
  console.warn("anjazz kelazz");
  console.log("Hello Server ...");
});

app.listen(4000);
