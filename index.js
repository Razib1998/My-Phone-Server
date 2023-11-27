const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds From nodemon moon");
});

app.get("/phones", (req, res) => {
    res.send(phones)
});

app.get('/phones/:id', (req, res) => {
     const id = req.params.id
     const idInt = parseInt(id);
     const phone = phones.find(phone => phone.id === idInt);
     res.send(phone)
})

app.listen(port, () => {
  console.log(`My server running on port: ${port}`);
});
