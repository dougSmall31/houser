const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const controller = require("./controller");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
