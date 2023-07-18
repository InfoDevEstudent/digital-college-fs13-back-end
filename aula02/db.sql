-- Listar os Bancos de Dados --
SHOW DATABASES;

-- Criar o Banco de Dados --
CREATE DATABASE db_escola;

-- Excluir um Banco de Dados ! MUITA ATENÇÃO !--
DROP DATABASE db_escola;

-- Selecionar/Entrar no Banco --
USE db_escola;

-- Listar as Tabelas no Banco --
SHOW TABLES;

-- Criar uma Tabela --
CREATE TABLE tb_cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    carga_horaria INT(4)
);

-- Visualizar a Estrutura de uma Tabela --
DESC tb_curso;

-- Excluir uma Tabela --
DROP TABLE tb_curso;

-- Alterar uma Tabela --
ALTER TABLE tb_curso
    ADD COLUMN
        descricao VARCHAR(100);
