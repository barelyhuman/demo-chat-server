'use strict';

module.exports = (app) => {

    const { UserController, MessageController, ThreadController } = app.Controllers;
    const router = require('express').Router();

    router.route('/login')
        .post(UserController.login);

    router.route('/logout')
        .post(UserController.logout);

    router.route('/search/users')
        .get(UserController.searchUsers);

    router.route('/register')
        .post(UserController.addUser);

    router.route('/threads')
        .get(ThreadController.fetchThreads)
        .post(ThreadController.create);

    // router.route('/threads/:userId')
    //     .get(MessageController.fetchThread);


    return router;

}