const express = require('express');
const app = express();
const port = 3000;

// Sample data
const users = [
    { id: 1, name: 'Alan Wake', age: 21, city: 'New York' }, 
    { id: 2, name: 'Steve Rogers', age: 106, city: 'Chicago' }, 
    { id: 3, name: 'Tom Hanks', age: 47, city: 'Detroit' }, 
    { id: 4, name: 'Ryan Burns', age: 16, city: 'New York' }, 
    { id: 5, name: 'Jack Ryan', age: 31, city: 'New York' }, 
    { id: 6, name: 'Clark Kent', age: 34, city: 'Metropolis' }, 
    { id: 7, name: 'Bruce Wayne', age: 21, city: 'Gotham' }, 
    { id: 8, name: 'Tim Drake', age: 21, city: 'Gotham' }, 
    { id: 9, name: 'Jimmy Olsen', age: 21, city: 'Metropolis' }, 
    { id: 10, name: 'Ryan Burns', age: 21, city: 'New York' },
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
