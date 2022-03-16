const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const sendEmail = require('./services/sendInBlue');

app.use(bodyParser.json());

app.get('/api', (req, res)=> {
    res.send("App is working");
});

app.post('/api/send_email', async (req, res) => {
    const { senderName, senderEmail, subject, body } = req.body;
    const response = await sendEmail(senderName, senderEmail, subject, body);
    res.send(response);
});

app.listen(5000);