### Ponto de entrada - Index:
1. Foi feita a importação das dependencias:
* yarn add express
* yarn add mongoose
* yarn add cors
2. A mais importante é express que que nos permite mexer com rotas, parametros e respostas.
3. Faz a conexão com o banco - mongoose.
4. Dividi o servidor para aceitar tanto protocolo http ou websocket que permite fazer comunicação em tempo real.
5. utilizamos o cors para permitir que todos endereços acessem nosso backend url's.
6. Criamos uma rota para acessar arquivos estaticos - imagens de uploads.
7. Cria um arquivo de rotas separado para declarar as rotas da aplicação. 

### Routes:
1. Foi feita a importação das dependencias:
* yarn add multer
2. Temos a importação do multer que usamos na rota de upload de posts e o multer permite que o express entenda o corpo que enviamos atravez do insominia no formato multpart form data que são arquivos fisicos e de texto.
3. tambem criamos rotas GET e POST que retorna todos os posts e a rota que permite realizarmos likes.

### PostController:
1. As rotas estão detalhadas nos controller.
2. Importações:
* yarn add sharp
* fs e path são do proprio node
3. Funções:
* Index: retorna todos os post's ordenados pelo campo createdAt que é data de criação do registro da tabela em forma decrescente em formato de JSON.
* store: recebe os dados do arquivo e os outros restantes dos dados dos post, redimenciona a imagem em 500px e deleta a imagem original e salva no banco e tambem envia uma informação em tempo real atravez do IO(realiza o emit) realiza uma mensagem com o nome post com os dados do post.

### LikeController:
1. Só faz a contagem dos likes
2. e tambem da um emit para os posts

### Model-Post:
1. Só uma representação das tabelas do banco de dados em formato de java scritp

### Config/Upload: 
1. configuração do destino que os arquivos vão e tambem o nome do arquivo, que usamos o nome do arquivo original.

### Componentes API

* yarn add express
* yarn add mongoose
* yarn add cors
* yarn add multer
* yarn add sharp

### Comandos de Execução

* yarn dev para iniciar API ("scripts": {
    "dev": "nodemon src/index.js"
  })
