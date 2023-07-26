const http = require('http');

function recepcao(req, res) {
    if (req.url === '/alunos') {
        res.end ('Lista de Alunos')
    }

    res.end('Olá Sergio')
}

http.createServer(recepcao).listen(8000)