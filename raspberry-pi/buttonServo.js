var Gpio = require('pigpio').Gpio,
  button = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  }),
  led = new Gpio(18, {mode: Gpio.OUTPUT}),
  motor = new Gpio(10, {mode: Gpio.OUTPUT}),
  pulseWidth = 1000,
  increment = 100;

button.on('interrupt', function (level) {
  led.digitalWrite(level);
  motor.servoWrite(pulseWidth+pulseWidth*level);
});
