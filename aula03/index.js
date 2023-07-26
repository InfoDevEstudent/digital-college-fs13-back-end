/* const http = require('http');
const database = require('./conexao')

async function recepcao(req, res) {
    if (req.url === '/alunos') {

        let dados = await database.executar('SELECT * FROM tb_aluno');

        res.end (
            JSON.stringify(dados)
        );
        return;
    }

    if (req.url === '/alunos/5')

    
    res.end('Olá Sergio')
}

http.createServer(recepcao).listen(8000) */

const express = require('express');
const database = require('./conexao');

const app = express();

app.get('/', (req, res) => {
    res.end('Olá Sergio Felipe');
});

app.get('./alunos', async (req, res) => {
    let dados = await database.executar('SELECT * FROM tb_aluno');

    /* res.end(
        JSON.stringify(dados)
    ); */
    res.json(dados);
});

app.get('./alunos/:id', async (req, res) => {
    let id = req.params.id;

    let dados = await database.executar(
        `SELECT * FROM tb_aluno WHERE id=${id}`
    );

    res.json(dados);
})

app.listen(8000, () => {
    console.log('API rodando')
})