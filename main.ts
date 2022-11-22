basic.showString("Abstandssensor bei A1")
basic.forever(function () {
    if (10 > grove.measureInCentimeters(DigitalPin.C16)) {
        basic.setLedColor(0xff0000)
    } else if (20 > grove.measureInCentimeters(DigitalPin.C16)) {
        basic.setLedColor(0xff8000)
    } else if (30 > grove.measureInCentimeters(DigitalPin.C16)) {
        basic.setLedColor(0xffff00)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
