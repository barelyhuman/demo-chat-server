'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    content: String,
    thread: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Thread
    },
    from: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User
    },
    to: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: User
    }
},
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });


const model = mongoose.model('Message', schema);

module.exports = model;