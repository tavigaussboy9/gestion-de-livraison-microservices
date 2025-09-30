const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo/notification', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3004, () => {
  console.log('Service Notification en écoute sur le port 3004');
});
