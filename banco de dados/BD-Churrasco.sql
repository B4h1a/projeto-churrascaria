create database churrascaria;
use churrascaria;

-- Tabela pedidos
CREATE TABLE pedidos(
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_grupoCarnes INT,
    id_grupoAdicionais INT,
    id_grupoSalada INT,
    id_grupoBebidas INT,
    id_grupoSobremesas INT,
    preco_total DECIMAL(10,2),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);
-- Tabela usuarios
CREATE TABLE usuarios(
		id_usuarios INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100),
        endereco VARCHAR(150),
        numero_casa INT(5),
        complemento VARCHAR(25),
        telefone VARCHAR(20),
        posicao VARCHAR(20) DEFAULT 'cliente'
);
-- Tabela Carnes
CREATE TABLE carnes(
	id_carnes INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    preco DECIMAL(10,2),
    tipo VARCHAR(20)
);
-- Tabela Grupo Carnes
CREATE TABLE grupoCarnes(
	id_grupoCarnes INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_carnes INT,
    precoTotal DECIMAL(10,2),
    FOREIGN KEY(id_carnes) REFERENCES carnes(id_carnes),
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido)
);
-- Tabela Bebidas 
CREATE TABLE bebidas(
	id_bebidas INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
	preco DECIMAL(10,2)
);
-- Tabela Grupo Bebidas
CREATE TABLE grupoBebidas(
	id_grupoBebidas INT PRIMARY KEY AUTO_INCREMENT,
    id_bebidas INT,
    id_pedido INT,
    precoTotal DECIMAL(10,2),
    FOREIGN KEY(id_bebidas) REFERENCES bebidas(id_bebidas),
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido)
);
-- Tabela Salada
CREATE TABLE salada(
	id_salada INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
	preco DECIMAL(10,2)
);
-- Tabela Grupo Saladas
CREATE TABLE grupoSalada(
	id_grupoSalada INT PRIMARY KEY AUTO_INCREMENT,
    id_salada INT,
    id_pedido INT,
    precoTotal DECIMAL(10,2),
	FOREIGN KEY(id_salada) REFERENCES salada(id_salada),
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido)
);
-- Tabela Acompanhamentos
CREATE TABLE adicionais(
	id_adicionais INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
	preco DECIMAL(10,2)
);
-- Tabela Grupo Acompanhamentos
CREATE TABLE grupoAdicionais(
	id_grupoAdicionais INT PRIMARY KEY AUTO_INCREMENT,
    id_adicionais INT,
    id_pedido INT,
    precoTotal DECIMAL(10,2),
	FOREIGN KEY(id_adicionais) REFERENCES adicionais(id_adicionais),
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido)
);
-- Tabela Doces
CREATE TABLE sobremesas(
	id_sobremesas INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
	preco DECIMAL(10,2)
);
-- Tabela Grupo Doces
CREATE TABLE grupoSobremesas(
	id_grupoSobremesas INT PRIMARY KEY AUTO_INCREMENT,
    id_sobremesas INT,
    id_pedido INT,
    precoTotal DECIMAL(10,2),
	FOREIGN KEY(id_sobremesas) REFERENCES sobremesas(id_sobremesas),
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido)
);
select * from grupoDoces;

-- Atualizando tabela de pedidos para adicionar as chaves estrangeiras
ALTER TABLE pedidos
ADD FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuarios),
ADD FOREIGN KEY(id_grupoCarnes) REFERENCES grupoCarnes(id_grupoCarnes),
ADD FOREIGN KEY(id_grupoAdicionais) REFERENCES grupoAdicionais(id_grupoAdicionais),
ADD FOREIGN KEY(id_grupoSalada) REFERENCES grupoSalada(id_grupoSalada),
ADD FOREIGN KEY(id_grupoBebidas) REFERENCES grupoBebidas(id_grupoBebidas),
ADD FOREIGN KEY(id_grupoSobremesas) REFERENCES grupoSobremesas(id_grupoSobremesas);

-- Inserindo ADM e usuario comum
INSERT INTO usuarios(nome, endereco, numero_casa, complemento, telefone, posicao) 
VALUES
('ADM', 'Rua Florzona verde', '111', 'Casa', '(16)99988-2222', 'ADM');

INSERT INTO usuarios(nome, endereco, numero_casa, complemento, telefone) 
VALUES
('Arthur Boer', 'Rua Florzinha amarela', '69', 'Casa', '(16) 99222-3333');

SELECT * FROM usuarios;

-- Inserindo Carnes
INSERT INTO carnes(nome, preco, tipo)
VALUES 
('Fraldinha', 31.00, 'Normal'),
('Maminha', 30.00, 'Normal'),
('Contra-File', 34.00, 'Normal'),
('Paleta Bovina', 32.00, 'Normal'),
('Picanha', 36.00, 'Especial'),
('Costela Bovina', 37.00, 'Especial'),
('Filet-Mignon', 39.00, 'Especial'),
('Alcatra', 37.00, 'Especial');

SELECT * FROM carnes;

-- Inserindo Bebidas
INSERT INTO bebidas(nome, preco)
VALUES
('Refrigerante 2L', 9.00),
('Refrigerante Lata', 5.00),
('Suco natural', 10.00),
('Suco lata', 5.00),
('Cerveja lata', 5.00),
('Chopp lata', 9.00);

SELECT * FROM bebidas;

-- Inserindo Saladas
INSERT INTO salada(nome, preco)
VALUES
('Alface', 12.00),
('Salada Japonesa', 20.00),
('Salada colorida', 15.00),
('Mix de saladas', 16.00);

SELECT * FROM salada;

-- Inserindo Acompanhamentos
INSERT INTO adicionais(nome, preco)
VALUES
('Arroz Branco', 5.00),
('Batata Frita', 5.00),
('Farofa', 5.00),
('Vinagrete ao molho negro', 5.00);

SELECT * FROM adicionais;

-- Inserindo Doces
INSERT INTO sobremesas(nome, preco)
VALUES
('Bolo chocolate', 7.00),
('Pudim com creme red', 5.00),
('Trufas diversas', 5.00),
('Cone recheado', 5.00),
('Cupcake', 5.00);

SELECT * FROM sobremesas;