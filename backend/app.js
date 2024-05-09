const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const feedRoutes = require("./routes/feed");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control_Allow-Origin", "*");
  res.setHeader(
    "Access-Control_Allow-Methods",
    "GETmPOST,OPTIONS,PUT,PATCH,DELETE"
  );
  res.setHeader("Access-Control_Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8000);
