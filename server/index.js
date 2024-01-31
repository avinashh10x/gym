const express = require('express');
const sendMail = require('./controllers/usercontoller');
const cors = require('cors');


const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/contact', sendMail)

app.listen(PORT, async (req, res) => {
    console.log(`Server running on port http://localhost:${PORT}`);
})