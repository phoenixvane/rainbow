input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . #
        # . # . #
        . # . # .
        . . # . .
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        # # # # #
        # . # . #
        `)
    basic.clearScreen()
})
basic.forever(function () {
	
})
