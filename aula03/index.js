const http = require('http');
const database = require('./conexao')

async function recepcao(req, res) {
    if (req.url === '/alunos') {

        let dados = await database.executar('SELECT * FROM tb_aluno');

        res.end (
            JSON.stringify(dados)
        );
        return;
    }

    
    res.end('Olá Sergio')
}

http.createServer(recepcao).listen(8000)