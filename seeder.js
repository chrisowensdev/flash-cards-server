'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const users = require('./data/users.js');
const categories = require('./data/categories.js');
const cards = require('./data/cards.js');

const User = require('./models/userModel.js');
const Category = require('./models/categoryModel.js');
const Card = require('./models/cardModel.js');

const connectDB = require('./config/db.js');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Card.deleteMany();

        await User.insertMany(users);
        await Card.insertMany(cards);

        console.log('Data Imported');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Category.deleteMany();

        console.log('Data Destroyed');
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
