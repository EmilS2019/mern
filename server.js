const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys");

mongoose
  .connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Server started at ${port}`));

const port = process.env.PORT || 5000;
app.listen(port);
