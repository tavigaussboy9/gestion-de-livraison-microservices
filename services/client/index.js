const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo/client', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3001, () => {
  console.log('Service Client en écoute sur le port 3001');
});
