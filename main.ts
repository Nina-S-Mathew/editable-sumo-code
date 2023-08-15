radio.onReceivedValueDeprecated(function (name, value) {
    if (name == "grass") {
        motion.turnLeft(value)
    } else if (name == "flower") {
        motion.turnRight(value)
    } else if (name == "plant") {
        motion.turnRight(value)
    } else if (name == "worm") {
        motion.driveStraight(value)
    } else if (name == "soil") {
        motion.driveStraight(value)
    } else if (name == "tree") {
        motion.stop()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("grass", 60)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("soil", 40)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("tree", 40)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("flower", 40)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendValue("plant", 40)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("worm", 40)
})
basic.showIcon(IconNames.Angry)
radio.setGroup(1)
