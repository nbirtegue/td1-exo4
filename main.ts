input.onButtonPressed(Button.A, function () {
    x1 += -1
    x12 += -1
    x += -1
})
input.onButtonPressed(Button.B, function () {
    x1 += 1
    x12 += 1
    x += 1
})
let x1 = -1
let x = 0
let x12 = 1
let y = 0
led.plot(0, 0)
basic.forever(function () {
    if (led.point(4, 0) && input.buttonIsPressed(Button.B)) {
        x1 = -2
        x = -1
        x12 = 0
        y = 1
        led.unplot(4, 0)
    }
    if (led.point(4, 1) && input.buttonIsPressed(Button.B)) {
        x1 = -2
        x = -1
        x12 = 0
        y = 2
        led.unplot(4, 1)
    }
    if (led.point(4, 2) && input.buttonIsPressed(Button.B)) {
        x1 = -2
        x = -1
        x12 = 0
        y = 3
        led.unplot(4, 2)
    }
    if (led.point(4, 3) && input.buttonIsPressed(Button.B)) {
        x1 = -2
        x = -1
        x12 = 0
        y = 4
        led.unplot(4, 3)
    }
    if (led.point(0, 1) && input.buttonIsPressed(Button.A)) {
        x1 = 4
        x = 5
        x12 = 6
        y = 0
        led.unplot(0, 1)
    }
    if (led.point(0, 2) && input.buttonIsPressed(Button.A)) {
        x1 = 4
        x = 5
        x12 = 6
        y = 1
        led.unplot(0, 2)
    }
    if (led.point(0, 3) && input.buttonIsPressed(Button.A)) {
        x1 = 4
        x = 5
        x12 = 6
        y = 2
        led.unplot(0, 3)
    }
    if (led.point(0, 4) && input.buttonIsPressed(Button.A)) {
        x1 = 4
        x = 5
        x12 = 6
        y = 3
        led.unplot(0, 4)
    }
    led.unplot(x1, y)
    led.plot(x, y)
    led.unplot(x12, y)
})
