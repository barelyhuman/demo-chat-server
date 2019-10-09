'use strict';

module.exports = function () {
    this.connections = {};

    const addConnection = (identifier, socket) => {
        this.connections[identifier] = socket;
    }

    const getConnection = (identifier) => {
        return this.connections[identifier];
    }

    this.addConnection = addConnection;
    this.getConnection = getConnection;
};