'use strict';

module.exports = function () {
    const connections = {};

    const vm = {};

    vm.addConnection = (identifier, socket) => {
        connections[identifier] = socket;
    }

    vm.getConnection = (identifier) => {
        return connections[identifier];
    }

    return vm;
};