
const express = require('express');

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello! Express Server 2 is Running!');
});

// Test API
app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        message: 'Users API working successfully',
        users: ['Harshad', 'Rahul', 'Amit']
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
