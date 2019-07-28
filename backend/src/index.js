const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

// <username>, <password> e <name_cluster> devem ser substituidos pelos atributos de seu banco de dados do MongoDB
mongoose.connect('mongodb+srv://<username>:<password>@<name_cluster>.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});


app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(9957);
