'use strict';

require('dotenv').config();

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const boot = require('./boot');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const httpServer = require('http').Server(app);
const socketIO = require('socket.io')(httpServer);

const socketStorage = require('./factories/socket-connections')();

socketIO.on('connection', function (socket) {
    if (socket
        && socket.handshake
        && socket.handshake.query
        && socket.handshake.query.username) {
        socketStorage.addConnection(socket.handshake.query.username, socket);
    }
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(cors());
app.use(bodyParser.json());

boot.processBoot(app)
    .then(() => {

        app.use('/api', routes(app));

        httpServer.listen(PORT, () => {
            console.log("Listening on " + PORT);
        });

    })
    .catch(err => { throw err; });


module.exports = app;