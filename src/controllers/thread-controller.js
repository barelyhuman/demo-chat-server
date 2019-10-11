const ThreadModel = require('../models/thread-model');

const Controller = {};

Controller.create = async (req, res) => {
    const { participantIds } = req.body;
    const threadInstance = new ThreadModel({
        participants: participantIds
    });
    const savedInstance = await threadInstance.save();
    return res.send({
        success: true,
        data: {
            threadId: savedInstance.id
        }
    });
};

Controller.fetchThreads = async (req, res) => {
    const allThreads = await ThreadModel.find();
    res.status(200).send({
        success: true,
        data: allThreads
    });
};


module.exports = {
    name: 'ThreadController',
    controller: Controller
};