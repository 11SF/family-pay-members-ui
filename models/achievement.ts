export interface Acheievement {
    name: string
}

export interface MemberAcheievement {
    acheievement: Acheievement[]
    memberId: string
}

export interface AverageInfo {
    memberId: string
    month: number[]
    averageMonth: number
    mostOfMonth: number
    prices: number[]
    totalPrice: number
    mostOfPrice: number
    averagePrice: number
    dateOverdue: number[]
    averageDateOverdue: number
    sumDateOverdue: number
    numberOfTransaction: number
    acheivements: string[]
}