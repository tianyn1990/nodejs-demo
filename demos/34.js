console.log(global.process === process);
console.log(typeof global.Date === 'function');
console.log(global.setImmediate instanceof global.Function);

console.log('----------------------');

console.log(1);
global.setImmediate(() => console.log(2)); // 下个循环末尾
global.setTimeout(() => console.log(3), 0); // 下个循环，先检查时间是否到了
process.nextTick(() => console.log(4)); // 下个循环‘开始之前’
console.log(5);
