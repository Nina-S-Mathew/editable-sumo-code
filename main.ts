radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Seven") {
        motion.turnLeft(value)
    } else if (name == "Eight") {
        motion.turnRight(value)
    } else if (name == "Nine") {
        motion.turnRight(value)
    } else if (name == "Ten") {
        motion.driveStraight(value)
    } else if (name == "Eleven") {
        motion.driveStraight(value)
    } else if (name == "Twelve") {
        motion.drive(value, -1 * value)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("Seven", 60)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("Eleven", 40)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Twelve", 40)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Eight", 40)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("Nine", 40)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("Ten", 40)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(1)
