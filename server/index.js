const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const controller = require("./controller");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING, { scripts: path.join(__dirname, "db") })
  .then(dbInstance => {
    console.log("set dbinstance");

    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/houses", controller.get);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
