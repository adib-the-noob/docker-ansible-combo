
const express = require('express');
const cors = require('cors');
const app = express();
const dashboardRouter = require('./router/dashboard.router');

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Mount dashboard router at /dashboard
app.use('/dashboard', dashboardRouter);

// Example: root endpoint
app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/health', (req, res) => {
  res.json({
    'status': 'UP'
  })
})

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});