

/**
 * Blocks til WIFI
 */
//% color=#494a4e weight=10 icon="\uF0EB"
namespace MBW {
    /**
    * Angiv hvilke pins der bruges til at forbinde til wifi-modulet. Hvilken pin på Micro:bit'en er forbundet til henholdsvis RX og TX på Wifi modulet?
    * @param wifiRX Den pin Micro:bit'en sender fra, eg: SerialPin.P12
    * @param wifiTX Den pin Micro:bit'en modtager på, eg: SerialPin.P13
    */
    //% weight=100
    //% blockId="wifi_init" block="Tilslutning af wifi-modulet|Forbind wifi RX til pin %wifiRX| og TX til pin %wifiTX|"
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
     * Opret forbindelse til et trådløst netværk.|
     * @param ssid Det trådløse netværk du vil forbinde til, eg: "Navnet på dit netværk"
     * @param password Kodeordet til dit netværk, eg: "Dit kodeord"
     */
    //% weight=10
    //% blockId="wifiConfig"
    //% block="Wifi-forbindelse|Opret forbindelse til dette netværk %ssid|Med dette kodeord %password"
    
    export function wifiConfig(ssid: string, password: string): void {
        serial.writeLine("WIFI " + ssid + " " + password + "\u000D" + "\u000A")
        basic.pause(15000)
    }

    /**
 * ThingSpeak: Send data.
 * @param write_api_key describe parameter here, eg: "Din api-nøgle fra ThingSpeak"
 * @param n1 describe parameter here, eg: 0
 * @param n2 describe parameter here, eg: 0
 * @param n3 describe parameter here, eg: 0
 * @param n4 describe parameter here, eg: 0
 * @param n5 describe parameter here, eg: 0
 * @param n6 describe parameter here, eg: 0
 * @param n7 describe parameter here, eg: 0
 * @param n8 describe parameter here, eg: 0
 */
    //% weight=97
    //% blockId="send_text"
    //% block="ThingSpeak: Send data|Din api-nøgle %write_api_key|Felt 1 %n1|Felt 2 %n2|Felt 3 %n3|Felt 4 %n4|Felt 5 %n5|Felt 6 %n6|Felt 7 %n7|Felt 8 %n8"
    
    export function tosendtext(write_api_key: string,
        n1: number,
        n2: number,
        n3: number,
        n4: number,
        n5: number,                         
        n6: number,
        n7: number,                        
        n8: number): void {
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
            + " "
            + n5
            + " "
            + n6
            + " "
            + n7
            + " "
            + n8
        serial.writeString(text + "\u000D" + "\u000A")
        basic.pause(8000)
        // Add code here
    }
}
