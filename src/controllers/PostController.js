const Post = require('../models/Post');
const sharp = require('sharp'); // Yarn add sharp - permiite adaptar imagens
const path = require('path') //dependencia do proprio node
const fs = require('fs'); //fileSystem do proprio node tambem

//YARN ADD CORS permite que nosso front-end acesse nosso back-end mesmo estando em dominios
//diferentes


module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt'); //Retorna os posts - sort onde de criação e o '-' decrescente
        return res.json(posts);
    },

    async store(req, res) {
        const {
            author,
            place,
            description,
            hashtags
        } = req.body; //Pega os dados do req.body
        const {
            filename: image
        } = req.file; // Altera o nome da variavel filename para image e pega imagem do req.file

        const [name] = image.split('.'); //removendo a extenção da imagem
        const filename = `${name}.jpg`; // transformando a imagem em jpg

        await sharp(req.file.path) //o caminho onde a imagem foi salva como parametro
            .resize(500) //redimencionar para 500px de largura e altura
            .jpeg({
                quality: 70
            }) //seta a qualidade em porcentagem
            .toFile( // exporta para novo arquivo
                path.resolve(req.file.destination, 'resized', filename) // coloco local da imagem, para onde ela vai e o nome da imagem 
            )

        fs.unlinkSync(req.file.path); //Passo o caminho da imagem não redimencionada para exclui-la


        const post = await Post.create({ // Criando o post - await espera finalizar - Post(model)
            author,
            place,
            description,
            hashtags,
            image: filename,
        });

        req.io.emit('post', post); //Envia uma informação para todos usuarios conectados

        return res.json(post); //Retorna as insformações do post
    }
};