//PACOTES INSTALADOS
//yarn add express
//yarn add nodemon -D  UTILIZADO PARA ATUALIZAR NOSSO SERVIDOR SEM PRECISAR FICAR USANDO node src/index.js
//yarn add mongoose //Biblioteca para manipular dados e base de dados do mongo
//yarn add cors permite que nosso front-end acesse nosso back-end mesmo estando em dominios
//diferentes
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); // para usar esse pacote express é preciso usar YARN ADD EXPRESS no terminal

const server = require('http').Server(app); //importa o http para passar o app como parametro
const io = require('socket.io')(server); // app esta pronto para receber protocolos socket.io e http

mongoose.connect('mongodb+srv://usercesso:teste123456@cluster0-uuqw8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, // esse comando diz qual o formato da minha string para conectar com o mongo
});

app.use((req, res, next) => {
    req.io = io;
    next();
}) //TODAS ROTAS QUE VIEREM DEPOIS DESSA DECLARAÇÃO
//TERÃO ACESSO A INFORMACAO req.io

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333); //aqui definimos a porta que usaremos