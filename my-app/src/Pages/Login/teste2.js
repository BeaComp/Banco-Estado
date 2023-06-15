const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Banco_Estado',
  password: '123456',
  port: 5432, // ou a porta que você configurou
});

// Verifica se a conexão com o banco de dados foi estabelecida
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

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/usuarios', async (req, res) => {
    try {
      const { rows } = await pool.query('select senha from contas ');
      res.json(rows);
      
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });


  //insere deste jeito

  app.get('/insere', async (req, res) => {
    try {
      const query = 'insert into contas (id_conta, senha) values ($1, $2)';
      const valores = ['7','6453'];
      await pool.query(query, valores);
    } catch (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).json({ error: 'Erro ao executar a consulta' });
    }
  });
 
  