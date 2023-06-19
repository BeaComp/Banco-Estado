const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Banco_Estado',
  password: '123456',
  port: 5432, //  porta que configurou o postgree
});


// Verificando se a conexão com o banco de dados foi estabelecida
pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida');
  }
});


const express = require('express');
const app = express();
const port = 8000; // Porta que esta rodando o server

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(express.json());


// Configurar o cabeçalho Access-Control-Allow-Origin para permitir todas as origens
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API em execução!');
});


// Rotas do sistema ========================================================================================

app.get('/usuarios', async (req, res) => {
  try {
    const { rows } = await pool.query('select * from contas');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});


// Busca para acessar o login cliente

app.get('/login', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const senha = req.query.senha;
    const query = 'select * from cliente where Id_conta = $1 and senha = $2';
    const values = [idConta, senha];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// Busca para acessar o login funcionario

app.get('/Loginfuncionario', async (req, res) => {
  try {
    const id_funcionario = req.query.id_funcionario;
    const senha = req.query.senha;
    const query = 'select * from funcionario where Id_funcionario = $1 and senha = $2';
    const values = [id_funcionario, senha];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// Busca por saldo e id da conta corrente

app.get('/SaldoContaCorrente', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const query = 'SELECT conta_corrente.saldo, cliente.Id_conta_corrente FROM conta_corrente JOIN cliente ON conta_corrente.id_conta = cliente.id_conta WHERE cliente.id_conta = $1';
    const values = [idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

// Busca por saldo e id da conta poupanca

app.get('/SaldoContaPoupanca', async (req, res) => {
  try {
    const idConta = req.query.id_conta;
    const query = 'SELECT conta_poupanca.saldo, cliente.Id_conta_poupanca FROM conta_poupanca JOIN cliente ON conta_poupanca.id_conta = cliente.id_conta WHERE cliente.id_conta = $1';
    const values = [idConta];
    const result = await pool.query(query, values);
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});


app.get('/ContasCorrenteFuncionario', async (req, res) => {
  try {
    const idFuncionario = req.query.idFuncionario;

    const query = `
      SELECT DISTINCT c.Nome_cliente, cc.Id_conta AS Conta_Corrente, c.CPF_cliente, c.Telefone
      FROM funcionario f
      INNER JOIN Conta_Corrente cc ON f.Id_funcionario = cc.Id_funcionario
      INNER JOIN cliente c ON cc.Id_conta = c.Id_conta
      WHERE f.Id_funcionario = $1
    `;
    console.log(req.params)
    const values = [idFuncionario];
    const result = await pool.query(query, values);
    const rows = result.rows;

    res.json(rows);
  } catch (error) {
    console.error('Erro ao executar a consulta', error);
    res.status(500).json({ error: 'Erro ao executar a consulta' });
  }
});

