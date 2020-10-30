const express = require('express');
const router = express.Router();

const Category = require('../models/categoryModel.js');
const Card = require('../models/cardModel.js');

// Get All Categories
router.get('/', async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

// Get Category by ID
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
});

// Create Category
router.post('/', async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
});

// Delete Category and Cards associate with Category
router.delete('/:id', async (req, res) => {
    const cardsByCategory = await Card.deleteMany({ category: req.params.id });
    const category = await Category.findById(req.params.id);
    category.remove();
    res.json(category);
});

module.exports = router;
