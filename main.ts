input.onButtonPressed(Button.A, function () {
    k_Bit.run(DIR.RunForward, 50)
})
input.onButtonPressed(Button.B, function () {
	
})
loops.everyInterval(500, function () {
    basic.showString("DIS")
    basic.showString("" + (k_Bit.obstacle(MotorObs.LeftSide)))
})
basic.forever(function () {
    if (k_Bit.ultra() < 30) {
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 50)
        basic.pause(1000)
        led.stopAnimation()
        k_Bit.carStop()
    }
})
basic.forever(function () {
    if (k_Bit.obstacle(MotorObs.LeftSide) == 0) {
        k_Bit.MotorSta(MotorObs.RightSide)
        basic.pause(1000)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 50)
    }
    if (k_Bit.obstacle(MotorObs.RightSide) == 0) {
        k_Bit.MotorSta(MotorObs.LeftSide)
        basic.pause(1000)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 50)
    }
})
