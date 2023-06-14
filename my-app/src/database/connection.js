const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configurações do banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Banco_Estado',
  password: '123456',
  port: 5432,
});

// Rota de exemplo
app.get('/', (req, res) => {
  pool.query('SELECT * FROM sua-tabela', (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta', err);
      res.status(500).send('Erro no servidor');
    } else {
      res.json(result.rows);
    }
  });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});