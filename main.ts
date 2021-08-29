let Winkel = 0
let Richtung = 1
pins.servoWritePin(AnalogPin.P2, Winkel)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        Winkel += 5 * Richtung
        pins.servoWritePin(AnalogPin.P2, Winkel)
        if (Winkel >= 180) {
            Richtung = -1
        } else {
            if (Winkel <= 0) {
                Richtung = 1
            }
        }
        basic.pause(50)
    }
})
