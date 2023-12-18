radio.onReceivedString(function (receivedString) {
    if (receivedString == "NORTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        SuperBit.Servo(SuperBit.enServo.S2, 180)
        SuperBit.Servo(SuperBit.enServo.S3, 45)
        SuperBit.Servo(SuperBit.enServo.S4, 45)
    } else if (receivedString == "SUL") {
        SuperBit.Servo(SuperBit.enServo.S1, 45)
        SuperBit.Servo(SuperBit.enServo.S2, 45)
        SuperBit.Servo(SuperBit.enServo.S3, 180)
        SuperBit.Servo(SuperBit.enServo.S4, 180)
    } else if (receivedString == "LESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        SuperBit.Servo(SuperBit.enServo.S2, 45)
        SuperBit.Servo(SuperBit.enServo.S3, 45)
        SuperBit.Servo(SuperBit.enServo.S4, 180)
    } else if (receivedString == "OESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 45)
        SuperBit.Servo(SuperBit.enServo.S2, 180)
        SuperBit.Servo(SuperBit.enServo.S3, 180)
        SuperBit.Servo(SuperBit.enServo.S4, 45)
    } else if (receivedString == "NORDESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        SuperBit.Servo(SuperBit.enServo.S2, 112)
        SuperBit.Servo(SuperBit.enServo.S3, 45)
        SuperBit.Servo(SuperBit.enServo.S4, 112)
    } else if (receivedString == "SUDOESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 45)
        SuperBit.Servo(SuperBit.enServo.S2, 112)
        SuperBit.Servo(SuperBit.enServo.S3, 180)
        SuperBit.Servo(SuperBit.enServo.S4, 112)
    } else if (receivedString == "NOROESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 112)
        SuperBit.Servo(SuperBit.enServo.S2, 180)
        SuperBit.Servo(SuperBit.enServo.S3, 112)
        SuperBit.Servo(SuperBit.enServo.S4, 45)
    } else if (receivedString == "SUDESTE") {
        SuperBit.Servo(SuperBit.enServo.S1, 112)
        SuperBit.Servo(SuperBit.enServo.S2, 45)
        SuperBit.Servo(SuperBit.enServo.S3, 112)
        SuperBit.Servo(SuperBit.enServo.S4, 180)
    } else if (receivedString == "HORARIO") {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        SuperBit.Servo(SuperBit.enServo.S2, 180)
        SuperBit.Servo(SuperBit.enServo.S3, 180)
        SuperBit.Servo(SuperBit.enServo.S4, 180)
    } else if (receivedString == "ANTIHORARIO") {
        SuperBit.Servo(SuperBit.enServo.S1, 45)
        SuperBit.Servo(SuperBit.enServo.S2, 45)
        SuperBit.Servo(SuperBit.enServo.S3, 45)
        SuperBit.Servo(SuperBit.enServo.S4, 45)
    } else {
        SuperBit.Servo(SuperBit.enServo.S1, 112)
        SuperBit.Servo(SuperBit.enServo.S2, 112)
        SuperBit.Servo(SuperBit.enServo.S3, 112)
        SuperBit.Servo(SuperBit.enServo.S4, 112)
    }
})
radio.setGroup(0)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    basic.showLeds(`
        # # . # #
        . # . . #
        . . . . .
        # . . # #
        . # # # .
        `)
    basic.pause(5000)
})
