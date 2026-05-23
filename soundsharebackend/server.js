
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = Number(process.env.PORT || 3001);
const router = require('./router');
const bodyParser = require('body-parser');
const { initDatabase } = require('./database');
const path = require('path');


app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true }));
app.use(cors());
app.use(express.json());

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const connect = async () => {
    try{
            await initDatabase();
            console.log('Connected to PostgreSQL');
    }catch (error) {
            console.log('Error connecting to PostgreSQL:', error.message);
    }
}

connect();

const server = app.listen(port, () => {
            const address = server.address();
            const listeningPort = address && typeof address === 'object' ? address.port : port;
            console.log(`Node server is listning to ${listeningPort}`)
});

app.use('/api', router); 