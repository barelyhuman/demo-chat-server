'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    participants: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'User'
    },
},
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });


const model = mongoose.model('Thread', schema);

module.exports = model;