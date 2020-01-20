const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const post = await Post.findById(req.params.id); //recebe o id como parametro
        post.likes += 1; //atribui um valor para like

        await post.save(); // salva o novo valor do like

        req.io.emit('like', post); //Envia uma informação para todos usuarios conectados

        return res.json(post);
    }
};