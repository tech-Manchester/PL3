// app.js
const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('./db'); // Import the database connection
const app = express();

app.use(express.json()); // Middleware to parse JSON request body

// POST endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password were provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Query the database to find the user with the provided username
  pool.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error' });
    }

    if (results.length > 0) {
      const user = results[0];

      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ error: 'Error comparing passwords' });
        }

        if (isMatch) {
          // Successfully logged in
          res.status(200).json({ message: 'Login successful', user: { id: user.id, username: user.username } });
        } else {
          // Incorrect password
          res.status(401).json({ message: 'Invalid credentials' });
        }
      });
    } else {
      // User not found
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// POST endpoint for user registration (optional)
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Hash the password before storing it in the database
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ error: 'Error hashing password' });
    }

    // Insert the new user into the database
    pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database query error' });
      }

      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
