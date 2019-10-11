const UserModel = require('../models/user-model');


const Controller = {};

Controller.addUser = async (req, res) => {
    const addedUserInstance = new UserModel(req.body);
    try {
        const saved = await addedUserInstance.save();
        res.status(200).send({
            success: true,
            message: 'User Created'
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

Controller.searchUsers = async (req, res) => {
    const data = await UserModel.find();
    return res.status(200).send({
        success: true,
        data: data
    });
}

Controller.logout = (req, res) => {

};

Controller.login = (req, res) => {
    res.send('Here');
};

module.exports = {
    name: 'UserController',
    controller: Controller
};