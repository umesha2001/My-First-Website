const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3001;

app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  user: 'umesha',
  host: 'localhost',
  database: 'firstwebsite',
  password: '123456',
  port: 5432,
});

// Sample API endpoint
app.get('/api/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
