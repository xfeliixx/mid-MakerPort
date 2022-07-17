export class Bookings {
    actualDuration: number
    actualStart: string
    deviceId: number
    expectedDuration: number
    id: number
    intendedDuration: number
    scheduledStart: string
    user: string
}

export class ImportBooking {
    deviceId: number
    scheduledStart: string
    intendedDuration: number

    constructor(deviceId: number, scheduledStart: string, intendedDuration: number) {
        this.deviceId = deviceId;
        this.scheduledStart = scheduledStart;
        this.intendedDuration = intendedDuration;
    }
}

