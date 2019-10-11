'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
},
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });


const model = mongoose.model('User', schema);

module.exports = model;