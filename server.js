const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log("Called")
  res.send("Hello World!")
});

app.listen(3000, () => console.log("Server started on Port: 3000"))