const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');

const connections = [];

exports.setuWebSocket = (server) => {
    const io = socketio(server);

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
    return connections.filter(connections => {
        return 
    })
}