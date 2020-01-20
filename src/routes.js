const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController'); //importanto controller
const LikeController = require('./controllers/LikeController'); //importanto controller

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index); //QUERO BUSCAR INFORMAÇÃO
routes.post('/posts', upload.single('image'), PostController.store); //acessando a metodo store do controller

routes.post('/posts/:id/like', LikeController.store); //recebendo parametro para dar um like no id do post

module.exports = routes;