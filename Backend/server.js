// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

const pool = new Pool({
  user: 'postgres.rwmlmbzpbvvceuauyxxu',
  host: 'aws-0-us-west-1.pooler.supabase.com',
  database: 'postgres',
  password: 'mayur@hackathon',
  port: 5432,
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));

// Example endpoint to fetch data from the database
app.get("/adduser", (req, res) => {
  console.log(req.body);
  res.send('Response Recieved: ' + req.body);
});

app.get('/api/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM public.lessons');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    res.status(201).send('User created successfully.');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('An error occurred.');
  }
});

app.post('/api/expenses', async (req, res) => {
  try {
    const { cost, description, date, category } = req.body;
    const result = await pool.query(
      'INSERT INTO expenses (cost, description, date, category) VALUES ($1, $2, $3, $4) RETURNING *',
      [cost, description, date, category]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding expense:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/api/transactions', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM expenses');
    res.json(rows);
    console.log(res.body)
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post("/api/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO user (name, username, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, username, email, password]
    );

    res.status(201).json(result.rows[0]); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM user1 WHERE emails = $1 AND password = $2', [email, password]);
    
    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.status(200).json({ message: 'Sign in successful' });
    }
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});