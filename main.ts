input.onButtonPressed(Button.B, function () {
    basic.showNumber(Time / 60)
})
let Time = 0
Time = 0
loops.everyInterval(1000, function () {
    Time += 1
})
basic.forever(function () {
    scrollbit.setUpsideDown(true)
    scrollbit.scrollText("Toilet Pass Room 41 Mr Parsons", 128, 50)
    scrollbit.show()
})
