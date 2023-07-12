const http = require('http');

//const {listarTodos, destaques, detalhes, filtrar} = require ('./produto');

//const {listarTodos, destaques, detalhes, filtrar} = require ('./categoria');

const produto = require('./produto');
const categoria = require('./categoria');

const PORTA = 8000;

function recepcao(req, res){
    res.end('Olá Lulu!')
}

http.createServer(recepcao).listen(PORTA);