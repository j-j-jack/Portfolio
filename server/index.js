const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const sendEmail = require('./services/sendInBlue');
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());

app.post('/api/send_email', async (req, res) => {
    const { senderName, senderEmail, subject, body } = req.body;
    const response = await sendEmail(senderName, senderEmail, subject, body);
    console.log("hello", response);
    res.send(response);
});

app.get('/api/get', (req, res) => {
    res.send("PORT");
});

if (process.env.PRODUCTION === 'true') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`)
})