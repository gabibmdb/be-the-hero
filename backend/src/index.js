//importanto o módulo express
const express = require('express');
//importando o cors
const cors = require('cors');
//importando o módulo routes. Obs: como é um arquivo e não um pacote precisa indicar o caminho relativo
const routes = require('./routes');

//instanciando a aplicação, app agora armazena a aplicação
const app = express();

app.use(cors());
//é preciso "indicar" que será utilizado objeto json antes da requisição dos parâmetros
app.use(express.json());
// <!> é importante que o app.use(routes) esteja abaixo de app.use(express.json())
app.use(routes);
//a aplicação app vai ouvir a porta 3333
app.listen(3333);


/*  Sobre rotas e recursos
A rota é o conjunto completo, por ex: localhost:3333/users, o '/users' isoladamente, é chamado de 'recurso'; 
*/

/**
* Métodos HTTP:
*
* GET: Buscar uma informação do back-end - por ex: buscar um usuário;
* POST: Criar uma informação no back-end - por ex: cadastrar um usuário;
* PUT: Alterar uma informação no back-end - por ex: alterar o endereço de um usuário;
* DELETE: Deletar uma informação do back-end - deletar um usuário;
*/ 

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados eniados na rota apos "?" (Filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos;
 */

 /**
  * Bancos de Dados
  * 
  * SQL: MySQL, SQLit, PostgreSQL, ORacle, Microsoft SQL Server;
  * NoSQL: MongoDB, CouchDB, etc;
  */

 /**
  * Driver: SELECT * FROM users; [pode ter diferença dependendo do banco SQL]
  * Query Builder: table('users').select('*').where()... [aceita qualquer banco SQL!]
  * 
  */

