const http = require('http');

process.on('uncaughtException', err => {
    console.log(process.cwd());
    console.log(err.message, err.stack);
    process.exit(1);
});

const server = http.createServer(() => {
    throw new Error('accur uncaught error');
});

server.listen(4000);