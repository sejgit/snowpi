let strip = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
let leftbottom = 0
let leftmid = 1
let lefttop = 2
let middlebottom = 3
let middlemid = 4
let middletop = 5
let rightbottom = 6
let rightmid = 7
let righttop = 8
let nose = 9
let eyeright = 10
let eyeleft = 11
strip.setBrightness(32)
basic.forever(function () {
    strip.setPixelColor(nose, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(eyeright, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(eyeleft, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(leftbottom, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(leftmid, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(lefttop, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(middlebottom, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(middlemid, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(middletop, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(rightbottom, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(rightmid, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(righttop, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(500)
    strip.setPixelColor(lefttop, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(leftmid, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(leftbottom, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(middletop, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(middlemid, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(middlebottom, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(righttop, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(rightmid, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(rightbottom, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
})
