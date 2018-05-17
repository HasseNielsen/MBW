

/**
 * Blocks for MBW
 */
//% color=#494a4e weight=10 icon="\uF0EB"
namespace MBW {

    /**
     * Starts MBW, need to be set before wifi configuration
     */
    //% weight=10 blockId="start" block="start"
    export function start(): void {

    }

    /**
     * Wifi configuration, connect to ssid with password
     * @param ssid The wifi we connect to
     * @param password The password for the wifi
     */
    //% weight=10 blockId="wifiConfig" block="Connect to this %ssid|Network with this %password|Password%"
    export function wifiConfig(ssid: string, password: string): void {

    }

}
