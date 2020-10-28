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

module.exports = router;
