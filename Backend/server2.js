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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


