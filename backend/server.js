const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Array en memoria
let items = [];

// GET /items
app.get("/items", (req, res) => {
  res.json(items);
});

// POST /items
app.post("/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.json({ ok: true, item });
});

app.listen(3000, () => console.log("API corriendo en http://localhost:3000"));
