const express = require('express');
const app = express();
const port = 3000;

// Sample data
const users = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Jim Brown', age: 35 },
];

// Endpoint to get all users with optional filters
app.get('/users', (req, res) => {
    let filteredUsers = users;

    // Filter by name if provided
    if (req.query.name) {
        filteredUsers = filteredUsers.filter(user => 
            user.name.toLowerCase().includes(req.query.name.toLowerCase())
        );
    }

    // Filter by age if provided
    if (req.query.age) {
        filteredUsers = filteredUsers.filter(user => 
            user.age === parseInt(req.query.age)
        );
    }

    res.json(filteredUsers);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
