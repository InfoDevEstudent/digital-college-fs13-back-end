const { connect } = require('http2');
const mysql2 = require('mysql2/promise');

async function executar(sql) {
    let conexao = await mysql2.createConnection({
        hot: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_escola',
        port: '3307',
    });

    let [results] = await conexao.query(sql);

    return results;
}

module.exports = {
    executar
};