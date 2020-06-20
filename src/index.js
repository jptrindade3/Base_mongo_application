const express = require('express');
const routes = require('./routes');
require('./database');//conexão com o banco de dados

const  app = express();//Chamando essa função, já temos o nosso app base criado
app.use(express.json());//Prepara nossa API pra entender informações JSON e pegar informações da URL
app.use(routes);//Link para o arquivo de rotas

//Rota de teste inicial
app.get('/', (req, res) => {
    res.send('Hello World! Agora, não precisa fechar o server!');
});

app.listen(3333);//Define a porta utilizada para acessar o back