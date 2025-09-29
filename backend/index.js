const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve Vite frontend build from 'dist'
const frontendPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// Example API endpoint
app.get('/api/ping', (req, res) => {
  res.json({ status: 'ok' });
});

// Fallback route: send index.html for client-side routing
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});