const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

// Get All Users
router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// Get User by ID
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Create User
router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

// Delete User by ID
router.delete('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    user.remove();
    res.json(user);
});

module.exports = router;
