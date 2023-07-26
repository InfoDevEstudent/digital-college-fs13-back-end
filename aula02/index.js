const http = require('http');
const db = require('./conexao')
async function recepcao (req, res) {
    if (req.url === '/cursos'){
        //buscando os dados no banco
        let cursos = await db.executar('SELECT * FROM tb_curso');

        //transformar os dados em json
        let json = JSON.stringify(cursos);

        //finalizando a resposta
        res.end(json);

        return;
    }

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