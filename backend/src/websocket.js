const socketio = require('socket.io');

exports.setuWebSocket = (server) => {
    const io = socketio(server);

    io.on('connection', socket => {
        console.log(socket.id);
    });
};