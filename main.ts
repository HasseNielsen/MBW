

/**
 * Blocks til WIFI
 */
//% color=#494a4e weight=10 icon="\uF0EB"
namespace MBW {
    /**
    * Angiv hvilke pins der bruges til at forbinde til wifi-modulet. Hvilken pin på Micro:bit'en er forbundet til henholdsvis RX og TX på Wifi modulet?
    * @param RXModule Den pin Micro:bit'en sender fra, eg: SerialPin.P12
    * @param TXModule Den pin Micro:bit'en modtager på, eg: SerialPin.P13
    */
    //% weight=100
    //% blockId="wifi_init" 
    //% block="Tilslutning af wifi-modulet|Forbind wifi-modulets RX til pin %RXModule|og TX til pin %TXModule"

    export function attachModule(RXModule: SerialPin, TXModule: SerialPin): void {
        // Add code here
        basic.pause(1000)
        serial.redirect(
            RXModule,
            TXModule,
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
 * @param api_key describe parameter here, eg: "Din api-nøgle fra ThingSpeak"
 * @param filed1 describe parameter here, eg: 0
 * @param filed2 describe parameter here, eg: 0
 * @param filed3 describe parameter here, eg: 0
 * @param filed4 describe parameter here, eg: 0
 * @param filed5 describe parameter here, eg: 0
 * @param filed6 describe parameter here, eg: 0
 * @param filed7 describe parameter here, eg: 0
 * @param filed8 describe parameter here, eg: 0
 */
    //% weight=97
    //% blockId="thingspeak_send_data"
    //% block="ThingSpeak: Send data|Din api-nøgle %api_key|Felt 1 %filed1|Felt 2 %filed2|Felt 3 %filed3|Felt 4 %filed4|Felt 5 %filed5|Felt 6 %filed6|Felt 7 %filed7|Felt 8 %filed8"
    
    export function thingSpeakSendData(api_key: string,
        filed1: number,
        filed2: number,
        filed3: number,
        filed4: number,
        filed5: number,                         
        filed6: number,
        filed7: number,                        
        filed8: number): void {
        let message = "THINGSPEAK "
            + api_key
            + " "
            + filed1
            + " "
            + filed2
            + " "
            + filed3
            + " "
            + filed4
            + " "
            + filed5
            + " "
            + filed6
            + " "
            + filed7
            + " "
            + filed8
        serial.writeString(message + "\u000D" + "\u000A")
        basic.pause(1000)
    }
}
