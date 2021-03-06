var Gpio = require('pigpio').Gpio,
  left = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  right = new Gpio(17, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  up = new Gpio(27, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  down = new Gpio(22, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  led = new Gpio(18, {mode: Gpio.OUTPUT}),
  motorX = new Gpio(10, {mode: Gpio.OUTPUT}),
  motorY = new Gpio(9, {mode: Gpio.OUTPUT}),
  pulseWidthX = 1000,
  incrementX = 10,
  pulseWidthY = 1000,
  incrementY = 10;

right.on('interrupt', function (level) {
  led.digitalWrite(level);
  if(pulseWidthX<=1000)
  {
    return;
  }
   pulseWidthX = pulseWidthX - incrementX*level;
});
left.on('interrupt', function (level) {
  led.digitalWrite(level);
   if(pulseWidthX>=2000)
  {
    return;
  }
  pulseWidthX = pulseWidthX + incrementX*level;
});
up.on('interrupt', function (level) {
  led.digitalWrite(level);
  if(pulseWidthY<=1000)
  {
    return;
  }
   pulseWidthY = pulseWidthY - incrementY*level;
});
down.on('interrupt', function (level) {
  led.digitalWrite(level);
  if(pulseWidthY>=2000)
  {
    return;
  }
  pulseWidthY = pulseWidthY + incrementY*level;
});


setInterval(function () {
  motorX.servoWrite(pulseWidthX);
  motorY.servoWrite(pulseWidthY);
}, 100);
