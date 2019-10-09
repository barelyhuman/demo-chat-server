const Controller = {};



Controller.exampleCrud = (req, res) => {
    res.send('Here');
}



module.exports = {
    name: 'ExampleController',
    controller: Controller
};