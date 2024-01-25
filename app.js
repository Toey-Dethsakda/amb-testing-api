// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'API data response' });
});

app.post('/api/data', (req, res) => {
  const { data } = req.body;
  res.json({ message: `Received data: ${data}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
