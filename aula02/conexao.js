
const mysql = require('mysql2/promise');

async function executar(query) {
    // await = esperar a conexao ser criada
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_escola',
        port: '3306' //SHOW GLOBAL VARIABLES LIKE 'PORT'; no |Terminal Maria DB|
    });

    const [results] = await con.query(query);

}

module.exports = {
    executar
};

//como sera executada
//executar ('SELECT * FROM tb_curso');