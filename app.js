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

const PORT = process.env.PORT

const apiUrl = 'https://uat.ambsuperapi.com';
const agentUsername = 'techautodev';
const apiKey = 'techautodev@456';
const productId = 'LIVECASINO';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/seamless/listgame', cors(corsOptions), async (req, res) => {
    try {
        // Make an API request using axios
        const response = await axios.get(`${apiUrl}/seamless/games?productId`, {
            params: {
                productId,
            },
            headers: {
                Authorization: `Basic ${Buffer.from(`${agentUsername}:${apiKey}`).toString('base64')}`,
                'Content-Type': 'application/json',
            },
        });

        // Assuming the API response contains a list of games
        const games = response.data;

        res.status(200).json({ message: 'Successfully fetched games', games });
    } catch (error) {
        console.error('Error fetching games:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/seamless/login', cors(corsOptions), function (req, res, next) {
    try {
        const { productId } = req.body;

        res.status(201).json({ message: 'Location point inserted successfully' });
    } catch (error) {
        console.error('Error inserting point: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})