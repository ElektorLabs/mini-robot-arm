var Gpio = require('pigpio').Gpio,
  left = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.RISING_EDGE
  }),
  right = new Gpio(17, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.RISING_EDGE
  }),
  up = new Gpio(27, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.RISING_EDGE
  }),
  down = new Gpio(22, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.RISING_EDGE
  }),
  led = new Gpio(18, {mode: Gpio.OUTPUT}),
  motor = new Gpio(10, {mode: Gpio.OUTPUT}),
  pulseWidthX = 1000,
  incrementX = 100,
  pulseWidthY = 1000,
  incrementY = 100;

left.on('interrupt', function (level) {
  led.digitalWrite(level);
  pulseWidthX = pulseWidthX - incrementX;
  motorX.servoWrite(pulseWidthX);
});
right.on('interrupt', function (level) {
  led.digitalWrite(level);
  pulseWidthX = pulseWidthX + incrementX;
  motorX.servoWrite(pulseWidthX);
});
up.on('interrupt', function (level) {
  led.digitalWrite(level);
  //motorY.servoWrite(pulseWidth+pulseWidth*level);
});
down.on('interrupt', function (level) {
  led.digitalWrite(level);
  //motorY.servoWrite(pulseWidth+pulseWidth*level);
});
