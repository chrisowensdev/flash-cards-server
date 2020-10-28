const express = require('express');
const router = express.Router();

const Card = require('../models/cardModel.js');

router.get('/', async (req, res) => {
    const cards = await Card.find({});
    res.json(cards);
});

router.get('/:id', async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.json(card);
});

router.get('/category/:id', async (req, res) => {
    const cardsByCategory = await Card.find({ category: req.params.id });
    res.json(cardsByCategory);
});

module.exports = router;
