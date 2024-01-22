const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

let userData = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const existingUser = userData.find(user => user.username === username);

  if (!existingUser) {
    userData.push({ username, password});

    res.json({ success: true, message: 'Registration successful' });
  } else {
    res.status(400).json({ success: false, message: 'Username already exists' });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = userData.find(user => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
