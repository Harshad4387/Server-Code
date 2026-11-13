
const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

// Health check for AWS Load Balancer
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

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
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
