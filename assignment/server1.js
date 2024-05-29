const express = require('express');
const app = express();
const port = 8000;
const data = require('./data.js');

const convertDateToTimestamp = (dateString) => {
    const parts = dateString.split('-');
    const date = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    return date.getTime();
};

app.get('/users', (req, res) => {
    let allUsers = data;

    if (req.query.startDate && req.query.endDate) {
        const startDate = convertDateToTimestamp(req.query.startDate);
        const endDate = convertDateToTimestamp(req.query.endDate);

        allUsers = allUsers.filter(user => {
            const userDate = convertDateToTimestamp(user.date);
            return userDate >= startDate && userDate <= endDate;
        });
    }

    res.json(allUsers);
});


app.listen(port , ()=>{
    console.log(`Server started at ${port}`);
})

