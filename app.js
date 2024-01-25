const express = require('express')
require('dotenv').config()
var cors = require('cors')
var app = express()

app.use(cors())

app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:3001', 'https://amb-testing-api.vercel.app'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const PORT =  process.env.PORT
const apiUrl = process.env.AMB_API_ENDPOINT; 
const agentUsername = 'techautodev';
const apiKey = 'techautodev@456';
const productId = 'LIVECASINO';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})