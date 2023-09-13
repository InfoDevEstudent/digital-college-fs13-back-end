const { DataTypes } = require('sequelize');
const orm = require('../connection/orm');

const Custumer = orm.define('tb_custumer', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    phone: {
        type: DataTypes.STRING(20)
    }
});

orm.sync().then(() => {
    console.log('Tabela de clientes atualizada');
})