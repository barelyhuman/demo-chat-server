'use strict';

module.exports = (app) => {

    const { ExampleController } = app.Controllers;
    const router = require('express').Router();

    router.route('/example')
        .get(ExampleController.exampleCrud)


    return router;

}