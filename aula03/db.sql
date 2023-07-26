USE db_escola;

CREATE TABLE tb_aluno (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
);

DESC tb_aluno;

INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico da Guia', '1997-12-21', "12332123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico das Chagas', '1997-11-21', "21332123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico do Nascimento', '1997-09-21', "11332123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Jesus', '1997-10-21', "12232123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Oliveira', '1997-09-21', "11132123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Lima', '1997-08-21', "12232121112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Maria', '1997-06-21', "14432123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Paula', '1997-05-21', "14431123112");
INSERT INTO tb_aluno
    (nome, data_nascimento, cpf)
VALUES
    ('Franscico de Antonio', '1997-05-20', "14432122312");

SELECT * FROM tb_aluno;

-- Buscar Apenas Algumas Colunas de Todos os Alunos --
SELECT nome, criado_em FROM tb_aluno;

SELECT nome FROM tb_aluno;

-- Buscar Um Aluno Especifico --
SELECT * FROM tb_aluno WHERE id='10';

-- Buscar Apenas Algumas Colunas de Um Aluno Especifico --
SELECT nome, cpf FROM 