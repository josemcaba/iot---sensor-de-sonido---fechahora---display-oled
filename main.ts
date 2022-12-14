OLED.init(128, 64)
RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 18)
RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 35)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Hora : ")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
    OLED.writeString(":")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
    OLED.newLine()
    OLED.writeString("Ruido: ")
    OLED.writeNum(Environment.ReadNoise(AnalogPin.P1))
    OLED.writeString(" dB")
    basic.pause(1000)
})
