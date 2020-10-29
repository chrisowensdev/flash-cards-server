'use strict';

const http = require('http');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3333;

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');
connectDB();

const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
};

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors(corsOptions));

const server = http.createServer(app);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

const userRoutes = require('./routes/userRoutes.js');
const cardRoutes = require('./routes/cardRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');

app.use('/api/users', userRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/categories', categoryRoutes);
