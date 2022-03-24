const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  description: String,
  categorie: String,
  dateDeSortie: Date,
  maisonDedition: String,
  quantityInStock: Number,
});

module.exports = mongoose.model("Books", BookSchema);
