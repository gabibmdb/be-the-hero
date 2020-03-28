//importando connection.js para fazer a conexão com o banco
const connection = require('../database/connection');
//o pacote crypto vem junto com o node
const crypto = require('crypto');

//exportando um objeto com seus métodos
module.exports = {
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
   
        return response.json(ongs);
    },
    

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        //randomBytes(4) vai gerar 4 bytes de caracteres aleatórios 
        //que serão convertidos para uma string do tipo hexadecimal através do toString
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json( { id });
    }
};