const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes"); // new

mongoose
  .connect(
    "mongodb+srv://ApiRestLibrary:APIREST@apirestlibrary.i0r0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(bodyParser.json());
    app.use("/api", routes); // new
    app.listen(4200, () => {
      console.log("Server has started!");
    });
  });
