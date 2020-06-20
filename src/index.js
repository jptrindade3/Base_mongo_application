const express = require('express');
const routes = require('./routes');
//const database = require('./database/index');
const mongoose = require('mongoose');

require('dotenv').config(); //importando o .env pra uso

//Setup do mongo
//mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}?${process.env.MONGO_OPTIONS}`);
mongoose.connect('mongodb+srv://jptrindade3:capmongopw@cluster0-ckkhn.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority');
mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
mongoose.connection.once('open', () => {
  console.log('Database connect!');
});
mongoose.Promisse = global.Promisse;

//Chamando essa função, já temos o nosso app base criado
const  app = express();
app.use(routes);//Link para o arquivo de rotas
app.use(express.json());//Prepara nossa API pra entender informações JSON e pegar informações da URL

//Rota de teste inicial
app.get('/', (req, res) => {
    res.send('Hello World! Agora, não precisa fechar o server!');
});

app.listen(3333);//Define a porta utilizada para acessar o back