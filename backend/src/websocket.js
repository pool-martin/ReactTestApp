const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDiscance = require('./utils/calculateDistance');

let io;
const connections = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query);

        connections.push({
            id: socket.id,
            coordinates: {
                latidute: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        });
//        setTimeout(() => {
//            socket.emit('message', 'Hello Omnistack');
//        })
    });
};

exports.findConnextions = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculateDiscance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
       
    });
}