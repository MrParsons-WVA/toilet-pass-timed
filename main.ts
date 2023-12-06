input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Time = 0
})
input.onButtonPressed(Button.A, function () {
    Start = true
})
input.onButtonPressed(Button.B, function () {
    Start = false
})
let Time = 0
let Start = false
Start = false
Time = 0
basic.forever(function () {
    if (Start == true) {
        scrollbit.scrollText("Toilet Pass", 128, 10)
        Time += 1
    } else {
        basic.showNumber(Time * 2)
        scrollbit.scrollText("You where out of the classroom for", 128, 20)
    }
})
