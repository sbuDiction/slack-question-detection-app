const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const filePath = '../slack-users.json';
const encodingType = 'utf-8';

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/api/get/slack-users', (req, res) => {
    console.log('GET ROUTE');

    // Asynchronously read the file
    fs.readFile(filePath, encodingType, (err, slackUsers) => {
        if (err) {
            // Handle any error that occurred during reading the file
            console.error('Error reading file:', err);
        } else {
            // File contents are stored in the "slackUsers" variable
            const users = JSON.parse(slackUsers);
            console.log(users);
            res.json({
                users
            })
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})