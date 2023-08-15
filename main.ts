radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "Nineteen") {
        motion.turnLeft(value)
    } else if (name == "Twenty") {
        motion.turnRight(value)
    } else if (name == "Twenty One") {
        motion.turnRight(value)
    } else if (name == "Twenty Two") {
        motion.driveStraight(value)
    } else if (name == "Twenty Three") {
        motion.driveStraight(value)
    } else if (name == "Twenty Four") {
        motion.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("Nineteen", 60)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("Twenty Three", 40)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Twenty Four", 40)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Twenty", 40)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("Twenty One", 40)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("Twenty Two", 40)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(1)
