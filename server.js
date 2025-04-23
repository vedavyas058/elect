const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve all static files (HTML, CSS, JS, images) from current directory
app.use(express.static(path.join(__dirname)));

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
