const http = require('http');

function recepcao (req, res) {
    if (req.url === '/categorias'){
        res.end('Lista de Categorias')
    }else if (req.url === '/produtos'){
        res.end('Lista de Produtos')
    }else {
        res.end('ERROR 404: Página Não Encontrada!')
    }

    //res.end('Olá, Sergio Felipe!')
}

http.createServer(recepcao).listen(8000);