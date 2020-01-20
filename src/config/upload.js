//configurando a forma que é feita o upload
const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({ // onde quero gravar as imagens
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //retorna o diretorio que estou utilizando
        filename: function (req, file, cb) { //recebe uma função, um arquivo e um arquivo
            cb(null, file.originalname); //Primeiro parametro seria o erro e o segundo é o nome da imagem que queremos retornar
        }
    })
};