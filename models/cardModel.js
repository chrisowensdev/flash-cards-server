const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    }
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
