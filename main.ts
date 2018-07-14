

/**
 * Blocks for MBW
 */
//% color=#494a4e weight=10 icon="\uF0EB"
namespace MBW {
    /**
    * Set pin RX and TX for ESP8266 Serial Wifi Module，Baud rate: 9600.
    * @param wifiRX describe parameter here, eg: SerialPin.P12
    * @param wifiTX describe parameter here, eg: SerialPin.P13
    */
    //% weight=100
    //% blockId="wifi_init" block="set ESP8266 RX %wifiRX| TX %wifiTX|at baud rate 9600"
    export function initwifi(wifiRX: SerialPin, wifiTX: SerialPin): void {
        // Add code here
        basic.pause(1000)
        serial.redirect(
            wifiRX,
            wifiTX,
            BaudRate.BaudRate9600
        )
        basic.pause(1000)
        serial.writeLine("" + "\u000D" + "\u000A")
        basic.pause(1000)
    }

    /**
     * Wifi configuration, connect to ssid with password
     * @param ssid The wifi we connect to, eg: "Your SSID"
     * @param password The password for the wifi, eg: "Your password"
     */
    //% weight=10 blockId="wifiConfig" block="Connect to this network: %ssid| with this password: %password"
    export function wifiConfig(ssid: string, password: string): void {
        serial.writeLine("WIFI " + ssid + " " + password + "\u000D" + "\u000A")
        basic.pause(15000)
    }

    /**
 * ThingSpeak: Set data to be sent.
 * @param write_api_key describe parameter here, eg: "your write api key"
 * @param n1 describe parameter here, eg: 0
 * @param n2 describe parameter here, eg: 0
 * @param n3 describe parameter here, eg: 0
 * @param n4 describe parameter here, eg: 0
 */
    //% weight=97
    //% blockId="send_text" block="set data to be send : Write API Key= %write_api_key|field1= %n1|field2= %n2|field3= %n3|field4= %n48"
    export function tosendtext(write_api_key: string,
        n1: number,
        n2: number,
        n3: number,
        n4: number): void {
        let text = ""
        text = "GET /update?key="
            + write_api_key
            + " "
            + n1
            + " "
            + n2
            + " "
            + n3
            + " "
            + n4
        serial.writeString(text + "\u000D" + "\u000A")
        basic.pause(8000)
        // Add code here
    }
}
