-- Informações importantes para manter a conexão com o Banco --

--    user: 'postgres',
--    host: 'localhost',
--    database: 'Banco_Estado',
--    password: '123456',
--    port: 5432,  porta que configurou o postgree (caso não tenha alterado 5432 é a porta padrão)
 
--create database Banco_Estado;

create table cliente (
	Nome_cliente varchar(100) not null,
	CPF_cliente varchar(14) not null UNIQUE,
	Telefone varchar(10) not null,
	Estado_civil varchar(8) not null,
	sexo varchar(2) not null,
	Data_de_nascimento varchar (10) not null,
	Endereco varchar(100) not null,
	Id_conta varchar(14),  --vai ser chave primaria
	senha varchar(10) not null,
	Id_conta_corrente varchar(14),  --vai ser chave primaria
	Id_conta_poupanca varchar(14),  --vai ser chave primaria 
	situacao varchar(12) not null  
);

create table Conta_Corrente (             
	Id_conta varchar(14), --chave estrangeira 
    saldo bigint not null,
	Id_funcionario varchar(14) not null     
);

create table Conta_Poupanca (             
	Id_conta varchar(14) , --chave estrangeira 
    saldo bigint not null,
	Id_funcionario varchar(14) not null     
);

create table funcionario ( 
	Id_funcionario varchar(14) not null,    --chave primaria
	senha varchar(10) not null,
	Cargo varchar(50) not null,				
	Nome_funcionario varchar(100) not null,
	CPF_funcionario varchar(14) not null UNIQUE,
	Telefone_funcionario varchar(10) not null,
	Estado_civil varchar(8) not null,
	sexo varchar(2) not null,
	Data_de_nascimento varchar (10) not null,
	Endereco varchar(100) not null,
	situacao varchar(12) not null
);

create table transacoes (
	Id_transacao SERIAL not null,     --chave primaria
	Valor bigint not null,
	Data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	Id_conta_corrente_poupanca varchar(14) not null,         
	valor_atualizado bigint not null,
	Valor_anterior bigint not null,
	descricao TEXT
);

create table emprestimo (
	Id_emprestimo SERIAL not null,    -- chave primaria
	Id_conta varchar(14) not null,    -- chave estrangeira
	Id_funcionario int not null,  	  -- chave estrangeira
  	Valor bigint not null,
	Taxa_Juros varchar(10) not null,
	Data_inicio varchar(10) not null,
	Data_final varchar(10) not null,
	Parcelas int not null
);

alter table cliente add primary key (Id_conta);
alter table Conta_Corrente add primary key (Id_conta,Id_funcionario);
alter table Conta_poupanca add primary key (Id_conta,Id_funcionario);
alter table funcionario add primary key (Id_funcionario);
alter table transacoes add primary key (Id_transacao);
alter table emprestimo add primary key (Id_emprestimo,Id_conta,Id_funcionario);

ALTER TABLE Conta_Poupanca ADD FOREIGN KEY (Id_funcionario) REFERENCES funcionario(Id_funcionario);
ALTER TABLE Conta_Corrente ADD FOREIGN KEY (Id_funcionario) REFERENCES funcionario(Id_funcionario);
ALTER TABLE emprestimo ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);
ALTER TABLE Conta_Corrente ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);
ALTER TABLE Conta_Poupanca ADD FOREIGN KEY (Id_conta) REFERENCES cliente(Id_conta);