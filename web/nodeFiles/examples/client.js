var osc = require('../lib/osc.js');

var client = new osc.Client('192.168.0.10', 3334);
client.send('/sliders/a',123);


// or
// var msg =  new osc.Message('/address')
// msg.append("testing");
// msg.append("testing");
// msg.append(123);
// client.send(msg)

// or
// var msg = new osc.Message('/address', 1, 2, 3);
// client.send(msg);
