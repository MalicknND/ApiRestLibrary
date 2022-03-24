const express = require("express");
const Book = require("./models/book"); // new
const Commande = require("./models/commande");
const router = express.Router();

// Get all posts
router.get("/book", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

//books en rupture de stock
router.get("/book-rupture", async (req, res) => {
  const books = await Book.find({ quantityInStock: { $eq: 0 } });
  res.send(books);
});
//get book by id
router.get("/book/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });
    res.send(book);
  } catch {
    res.status(404);
    res.send({ error: "Book not found" });
  }
});
//updating
router.patch("/book/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });

    if (req.body.name) {
      book.name = req.body.name;
    }

    if (req.body.author) {
      book.author = req.body.author;
    }
    if (req.body.description) {
      book.description = req.body.description;
    }
    if (req.body.categorie) {
      book.categorie = req.body.categorie;
    }
    if ("quantityInStock" in req.body) {
      book.quantityInStock = req.body.quantityInStock;
    }

    await book.save();
    res.send(book);
  } catch {
    res.status(404);
    res.send({ error: "Book not found !" });
  }
});
//delete book
router.delete("/book/:id", async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Book not found !" });
  }
});

//create book
router.post("/book", async (req, res) => {
  console.log(req.body);
  const book = new Book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
    categorie: req.body.categorie,
    quantityInStock: req.body.quantityInStock,
  });
  await book.save();
  res.send(book);
});

//pour crer une commande

router.post("/commande", async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.body.book_id });
    if (book.quantityInStock < req.body.quantity) {
      res.status(400);
      res.send({ error: "Quantity unavailable" });
    }
    const commande = new Commande({
      quantityCom: req.body.quantity,
      etat: false,
      book_id: req.body.book_id,
    });
    book.quantityInStock -= req.body.quantity;
    await commande.save();
    await book.save();
    res.send(commande);
  } catch {
    res.status(404);
    res.send({ error: "Book not found" });
  }
});

router.get("/commande", async (req, res) => {
  const commande = await Commande.find();
  res.send(commande);
});

//valider commandes
router.patch("/commande/valide/:id", async (req, res) => {
  try {
    const commande = await Commande.findOne({ _id: req.params.id });
    commande.etat = true;
    await commande.save();
    res.send(commande);
  } catch {
    res.status(404);
    res.send({ error: "Commande not found !" });
  }
});

module.exports = router;
