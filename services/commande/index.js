const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo/commande', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3002, () => {
  console.log('Service Commande en écoute sur le port 3002');
});
