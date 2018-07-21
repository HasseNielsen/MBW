

/**
 * Blocks til WIFI
 */
//% color=#494a4e weight=10 icon="\uF0EB"
namespace MBW {
    /**
    * Angiv hvilke pins der bruges til at forbinde til wifi-modulet.|RX: Hvilken pin er forbundet til RX på Wifi modulet?|TX: Hvilken pin er forbundet til TX på Wifi modulet?
    * @param wifiRX, eg: SerialPin.P12
    * @param wifiTX, eg: SerialPin.P13
    */
    //% weight=100
    //% blockId="wifi_init" block="Wifi tilslutning:|Forbind wifi RX til pin %wifiRX| og TX til pin %wifiTX|"
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
    //% weight=10 blockId="wifiConfig" block="Wifi config: Connect to this network: %ssid| with this password: %password"
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
    //% blockId="send_text" block="ThingSpeak: Set data to be send : Write API Key= %write_api_key|field1= %n1|field2= %n2|field3= %n3|field4= %n48"
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
