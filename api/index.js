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


  // Busca para acessar o login
  
  app.get('/login', async (req, res) => {
    try {
      const idConta = req.query.id_conta;
      const senha = req.query.senha;
      const query = 'select * from contas where id_conta = $1 and senha = $2';
      const values = [idConta, senha];
      const result = await pool.query(query,values);
      const rows = result.rows;
      res.json(rows);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });
 
  