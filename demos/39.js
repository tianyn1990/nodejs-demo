const EventEmitter = require('events').EventEmitter;

const event = new EventEmitter;

const EVENT_NAME = 'someEvent';

const listener = (...args) => console.log(args);
event.on(EVENT_NAME, listener);

event.emit(EVENT_NAME, 1, 2, 3); // [1, 2, 3]

event.removeListener(EVENT_NAME, listener);
// event.removeAllListeners(EVENT_NAME);

event.emit(EVENT_NAME, 1, 2, 3); //

console.log('---------------------')

class MyClass extends EventEmitter {}
/*
方法二：
const MyClass = function() {};
MyClass.prototype.__proto__ = EventEmitter.prototype;
*/

const mc = new MyClass;
mc.on(EVENT_NAME, listener);
mc.emit(EVENT_NAME, 1, 2, 3); // [1, 2, 3]

console.log('---------------------')

const http = require('http');

const server = http.Server((req, res) => {
    req.on('data', data => {
        console.log('request data:' + data);
    });
    req.on('end', () => {
        console.log('request end');
    });
});

// curl 127.0.0.1:4001/ -da=1
server.listen(4001);