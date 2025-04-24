const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Import routes
const moveieRoutes = require('./routes');
app.use('/api/movies', moveieRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
