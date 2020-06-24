const mongoose = require('mongoose');//importando a biblioteca de uso do mongo
require('dotenv').config();//importando o .env pra uso

//Setup do mongo
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}&w=majority`);
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.connection.once('open', () => {
  console.log('Database connect!');
});
mongoose.Promisse = global.Promisse;