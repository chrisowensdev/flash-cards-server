const express = require('express');
const router = express.Router();

const Category = require('../models/categoryModel.js');

router.get('/', async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.json(category);
});

router.post('/', async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
});

router.delete('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    category.remove();
    res.status(200).json({
        success: true,
    });
});

module.exports = router;
