var osc = require('node-osc');

var client = new osc.Client('127.168.1.10', 7000);
client.send('/sliders/a', 127);