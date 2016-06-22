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
  pulseWidth = 1000,
  increment = 100;

left.on('interrupt', function (level) {
  led.digitalWrite(level);
  motor.servoWrite(pulseWidth+pulseWidth*level);
});
right.on('interrupt', function (level) {
  led.digitalWrite(level);
  motor.servoWrite(pulseWidth+pulseWidth*level);
});
up.on('interrupt', function (level) {
  led.digitalWrite(level);
  motor.servoWrite(pulseWidth+pulseWidth*level);
});
down.on('interrupt', function (level) {
  led.digitalWrite(level);
  motor.servoWrite(pulseWidth+pulseWidth*level);
});
