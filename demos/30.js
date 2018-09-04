const net = require('net');

net.createServer(connection => {
    connection.on('error', err => {
        console.log(err);
    });
}).listen(4001);