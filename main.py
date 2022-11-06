OLED.init(64, 128)

def on_forever():
    OLED.clear()
    OLED.write_string("Light:")
    OLED.write_num(Environment.read_light_intensity(AnalogPin.P1))
    OLED.new_line()
    OLED.write_string("Temperatured℃:")
    OLED.write_num(Environment.octopus_BME280(Environment.BME280_state.BME280_TEMPERATURE_C))
    OLED.new_line()
    OLED.write_string("Humidity：")
    OLED.write_num(Environment.octopus_BME280(Environment.BME280_state.BME280_HUMIDITY))
    basic.pause(6000)
basic.forever(on_forever)

