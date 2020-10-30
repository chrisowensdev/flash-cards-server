const express = require('express');
const router = express.Router();

const Card = require('../models/cardModel.js');

// Get All Cards
router.get('/', async (req, res) => {
    const cards = await Card.find({});
    res.json(cards);
});

// Get Card by ID
router.get('/:id', async (req, res) => {
    const card = await Card.findById(req.params.id);
    res.json(card);
});

// Get Cards by Category
router.get('/category/:id', async (req, res) => {
    const cardsByCategory = await Card.find({ category: req.params.id });
    res.json(cardsByCategory);
});

// Create Card
router.post('/', async (req, res) => {
    const card = await Card.create(req.body);
    res.json(card);
});

// Delete Card by ID
router.delete('/:id', async (req, res) => {
    const card = await Card.findById(req.params.id);
    card.remove();
    res.json(card);
});

module.exports = router;
