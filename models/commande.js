const mongoose = require("mongoose");
const commandeSchema = new mongoose.Schema({
  quantityCom: Number,
  etat: Boolean,
  book_id: String,
});

module.exports = mongoose.model("Commande", commandeSchema);
