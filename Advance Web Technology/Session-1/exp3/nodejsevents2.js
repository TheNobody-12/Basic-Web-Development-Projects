const EventEmmiter = require('events');

class MyEmitter extends EventEmmiter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', (floor_num,switch_num) => {
    console.log('Please turn off the motor! at floor: '+floor_num+' switch: '+switch_num);
});

myEmitter.emit('WaterFull', 2,7);