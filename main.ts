let gadge = 0
let roll = 0
let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
basic.forever(function () {
    strip.clear()
    roll = input.rotation(Rotation.Roll)
    gadge = Math.map(roll, -90, 90, 0, 12)
    gadge = Math.round(gadge)
    strip.setPixelColor(gadge, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
