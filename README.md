# mini-robot-arm
Examples for https://www.elektor.de/mini-robot-arm-complete-with-4-servos

# Assembly Instructions
See this video:
https://www.youtube.com/watch?v=0zUHIkLretM

And this PDF:
https://www.elektor.de/downloads/dl/file/id/1331/manual_mini_robot_arm_complete_with_4_servos.pdf

# Software Installation

Download this repository or clonse it with git: 
```
git clone https://github.com/ElektorLabs/mini-robot-arm.git
```

# Examples for Raspberry Pi
The examples for the Raspberry Pi are written in Node.js, so please make sure that you have Node.js installed on your Pi:
```
curl -sLS https://apt.adafruit.com/add | sudo bash
sudo apt-get install node
```

The examples for the Raspberry Pi can be found in the folder raspberry-pi.
Change into this folder and run this command:
```
cd raspberry-pi
npm install
```
This installs the pigpio module (https://github.com/fivdi/pigpio). 

Now you are set up and we can run some test.

## Fade an LED
Connect an LED to pin GPIO18 and rund this program:
```
sudo node pwmLED.js
```
If this works, we can go on with testing a servo.

## Sweeping a servo

Connect a servo to pin GPIO10 (and the other cables of the servo to GND and 5V, see the datasheet of your servo for color codes) and run this programm:
```
sudo node sweepServo.js
```




