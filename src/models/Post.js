const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({ //fala quais colunas estão disponiveis
    //nome das colunas
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true, // cria campos que armazenam datas de criação e alteração
});

module.exports = mongoose.model('Post', PostSchema);