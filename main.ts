

/**
 * Blocks for a basic test
 */
//% color=#169aa7 weight=32 icon="\uF0EB"
namespace test {
    let cmdBuff: Buffer
    let readBuff: Buffer
    let readyToSend: boolean
    readyToSend = false
    /**
     * Starts a basic test, typically placed in "On Start"
     */
    //% weight=31 blockId="startTEST" block="Start test"
    export function startHummingbird(): void {
        serial.redirect(SerialPin.P15, SerialPin.P14, BaudRate.BaudRate115200)
        cmdBuff = pins.createBuffer(1)
        cmdBuff.setNumber(NumberFormat.UInt8LE, 0, 88) // Ascii value of 'X'
        serial.writeBuffer(cmdBuff)
        readyToSend = true
    }

}
