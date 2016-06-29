var express = require('express');
var app = express();

var Gpio = require('pigpio').Gpio;
var led = new Gpio(18, {mode: Gpio.OUTPUT});

app.get('/', function(req, res){
  res.send('go to /on or /off');
});

app.get('/on', function(req,res){
  led.digitalWrite(1);
  res.send('LED is now on.');
});

app.get('/off', function(req,res){
  led.digitalWrite(0);
  res.send('LED is now off.');
});


app.listen(8088, function(){
  console.log('listening on port 8088.');
});
