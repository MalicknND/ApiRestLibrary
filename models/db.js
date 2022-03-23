const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ApiRestLibrary:ApiRestLibrary@apirestlibrary.i0r0z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Connected to Database");
    else console.log("Not Connected to Database");
  }
);

require("./books");
