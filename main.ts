

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
    //% block="Tilslutning af wifi-modulet:|Forbind wifi-modulets RX til pin %RXModule|og TX til pin %TXModule"

    export function attachModule(RXModule: SerialPin, TXModule: SerialPin): void {
        // Add code here
        basic.pause(1000)
        serial.redirect(
            RXModule,
            TXModule,
            BaudRate.BaudRate9600
        )
        basic.pause(1000)
        goFetch("")
        basic.pause(1000)
    }

    /**
     * Opret forbindelse til et trådløst netværk.
     * @param ssid Det trådløse netværk du vil forbinde til, eg: "Navnet på dit netværk"
     * @param password Kodeordet til dit netværk, eg: "Dit kodeord"
     */
    //% weight=90
    //% blockId="wifiConfig"
    //% block="Wifi-forbindelse: Netværk %ssid|Kodeord %password"
    
    export function wifiConfig(ssid: string, password: string): void {
        goFetch("WIFI " + ssid + " " + password)
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
    //% weight=80
    //% subcategory=ThingSpeak
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
        goFetch(message)
        basic.pause(1000)
    }
    
    
 /**
 * IFTTT: Send besked til webhook.
 * @param key describe parameter here, eg: "Den sidste del af din webhook url, eks. bKYZqPvHfkrEfgyg6YVpjd"
 * @param event_name describe parameter here, eg: "Event Name"
 * @param value1 describe parameter here, eg: "Tekst 1"
 * @param value2 describe parameter here, eg: "Tekst 2"
 * @param value3 describe parameter here, eg: "Tekst 3"
 */
    //% weight=70
    //% subcategory=IFTTT
    //% blockId="ifttt_send_data"
    //% block="IFTTT: Kald webhook|Din unikke nøgle %key|Din event %event_name|Værdi 1 %value1|Værdi 2 %value2|Værdi 3 %value3"
    
    export function IFTTTSendData(key: string,
        event_name: string,
        value1: string,
        value2: string,
        value3: string): void {
        let message = "IFTTT "
            + key
            + " "
            + event_name
            + " "
            + value1
            + " "
            + value2
            + " "
            + value3
        goFetch(message)
        basic.pause(1000)
    }

    
    export enum GoProMode {
        //% block="Video"
        VIDEO,
        //% block="Photo"
        PHOTO
    }
     /**
     * GoPro: Vælg funktion.
     * @param rec_mode describe parameter here, eg: Photo,Video
     */
    //% weight=60
    //% subcategory=GoPro
    //% blockId="gopro_rec_mode"
    //% block="GoPro:|Vælg funktion %rec_mode"
    
    export function GoProRecMode(rec_mode: GoProMode): void {
        let message = "GOPRO "
            + rec_mode
        goFetch(message)
        basic.pause(1000)
    }
    
    /**
     * GoPro: Tag billede/start optagelse.
     */
    //% weight=59
    //% subcategory=GoPro
    //% blockId="gopro_shutter"
    //% block="GoPro:| Tag billede/start optagelse"
    export function GoProShutter(): void {
      let message = "GOPRO SHUTTER"
        goFetch(message)
        basic.pause(1000)
    }
    
    /**
     * GoPro: Stop optagelse.
     */
    //% weight=58
    //% subcategory=GoPro
    //% blockId="gopro_stop"
    //% block="GoPro:| Stop optagelse"
    export function GoProStop(): void {
      let message = "GOPRO STOP"
        goFetch(message)
        basic.pause(1000)
    }    
    function goFetch(message: string){
        serial.writeString(message + "\u000D" + "\u000A")
    }
    
    /**
     * Hardware: Firmware version.
     */
    //% weight=57
    //% subcategory=Hardware
    //% blockId="hard_version"
    //% block="Hardware:| Vis firmware version"
    export function HardwareVersion(): void {
      let message = "VERSION"
        goFetch(message)
        basic.pause(1000)
    }

    /**
     * Hardware: update firmware.
     */
    //% weight=56
    //% subcategory=Hardware
    //% blockId="hard_update"
    //% block="Hardware:| Update firmware"
    export function HardwareUpdate(): void {
      let message = "UPDATE"
        goFetch(message)
        basic.pause(1000)
    }
        
    
    function goFetch(message: string){
        serial.writeString(message + "\u000D" + "\u000A")
    }
}
