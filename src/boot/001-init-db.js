'use strict';

const mongoose = require('mongoose');


module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.CHATAPPDBURL, { useNewUrlParser: true });
        resolve();
    });
}
