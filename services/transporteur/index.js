const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo/transporteur', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3003, () => {
  console.log('Service Transporteur en écoute sur le port 3003');
});
