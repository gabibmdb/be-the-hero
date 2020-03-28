//importanto o knex
const knex = require('knex');
//importando as configurações do banco de dados do knexfile.js
const configuration = require('../../knexfile');

//criando a conexão com o banco passando como parâmetro a conexão de desenvolvimento
//...escolhendo o padrão da conexão development, que é a que está sendo utilizada no projeto
const connection = knex(configuration.development);

module.exports = connection;