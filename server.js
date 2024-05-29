const express = require('express');
const app = express();
const port = 3000;

// Sample data
const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Jim Brown', age: 35 },
];

// Endpoint to get all users
app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
