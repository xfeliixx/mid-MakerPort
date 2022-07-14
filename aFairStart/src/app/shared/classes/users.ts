export class Users {
    deviceExpericence: DeviceExpericence
    name: string
    recentBookingsDuration: RecentBookingsDuration
    role: string
    username: string
}

export interface DeviceExpericence {
    ThreeDimensionalPrinter: number
    Printer: number
}

export interface RecentBookingsDuration {
    ThreeDimensionalPrinter: number[]
    Printer: number[]
}


