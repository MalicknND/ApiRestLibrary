const express = require("express");
const app = express();
const books = require("./books.json");
const db = require("./models/db");

//middleware
app.use(express.json());

//récuperer l'ensemble des livres
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

//récuperer un livre grace à l'id
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  res.status(200).json(book);
});

//ajout d'un livre
app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(200).json(books);
});

//modifier un livre
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let book = books.find((book) => book.id === id);
  (book.name = req.body.name),
    (book.author = req.body.author),
    (book.description = req.body.description),
    (book.categorie = req.body.categorie),
    (book.dateDeSortie = req.body.dateDeSortie),
    (book.maisonDedition = req.body.maisonDedition),
    (book.quantityInStock = req.body.quantityInStock),
    res.status(200).json(book);
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let book = books.find((book) => book.id === id);
  books.splice(books.indexOf(book), 1);
  res.status(200).json(books);
});

app.listen(4200, () => {
  console.log("Serveur à l'ecoute");
});
