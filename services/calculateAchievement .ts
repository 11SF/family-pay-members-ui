import { achievement } from "@/constante/achievement";
import { AverageInfo } from "@/models/achievement";
import { Member } from "@/models/family";
import { Transaction } from "@/models/transaction";

export const initAchievement = (members: Member[], transactions: Transaction[], familyId: string): AverageInfo[] => {
    let familyTransactions = transactions.filter(e => e.familyId === familyId)
    let memberAverageInfo: AverageInfo[] = initAverageInfo(members)

    let totalResult = {
        totalMonth: 0,
        totalPrice: 0
    }
    for (const transaction of familyTransactions) {
        for (const member of memberAverageInfo) {
            if (transaction.memberId === member.memberId) {
                member.numberOfTransaction += 1
                member.month.push(transaction.month)
                member.prices.push(transaction.price)
                member.totalPrice += transaction.price
                member.dateOverdue.push(transaction.dateOverdue)
                member.sumDateOverdue += transaction.dateOverdue
            }
        }
        totalResult.totalMonth += transaction.month
        totalResult.totalPrice += transaction.price
    }

    for (const member of memberAverageInfo) {
        member.averageMonth = member.month.reduce((a, b) => a + b, 0) / member.numberOfTransaction
        member.averagePrice = member.prices.reduce((a, b) => a + b, 0) / member.numberOfTransaction
        member.averageDateOverdue = member.dateOverdue.reduce((a, b) => a + b, 0) / member.numberOfTransaction

        let currentMonth = 0
        let score = 0
        let maxScore = 0
        let maxScoreMonth = 0
        for (const month of member.month.sort().reverse()) {
            if (currentMonth === month) {
                continue
            }
            currentMonth = month
            score = member.month.filter(e => e === month).length
            if (score > maxScore) {
                maxScore = score
                maxScoreMonth = month
            }
        }
        member.mostOfMonth = maxScoreMonth

        let currentPrice = 0
        let maxScorePrice = 0
        score = 0
        maxScore = 0
        for (const price of member.prices.sort().reverse()) {
            if (currentPrice === price) {
                continue
            }
            currentPrice = price
            score = member.prices.filter(e => e === price).length
            if (score > maxScore) {
                maxScore = score
                maxScorePrice = price
            }
        }
        member.mostOfPrice = maxScorePrice
    }

    let topSpenders = memberAverageInfo.filter(e => e.totalPrice === Math.max(...memberAverageInfo.map(e => (e.totalPrice))))
    for (const member of memberAverageInfo) {
        console.log(member.memberId);
        if (member.averageDateOverdue <= 1) {
            member.acheivements.push(achievement[2].name) // เสือโอนไว
        }
        if (topSpenders.find(e => e.memberId === member.memberId)) {
            member.acheivements.push(achievement[0].name) // นายทุนใหญ่
        }

        member.acheivements.push(achievement[1].name.replace("#", member.mostOfMonth.toString())) // นายทุน # เดือน
    }
    // let topPrice
    return memberAverageInfo

}

const initAverageInfo = (members: Member[]): AverageInfo[] => {
    return members.map(e => (
        {
            memberId: e.id,
            month: [],
            averageMonth: 0,
            mostOfMonth: 0,
            prices: [],
            totalPrice: 0,
            averagePrice: 0,
            mostOfPrice: 0,
            dateOverdue: [],
            averageDateOverdue: 0,
            sumDateOverdue: 0,
            numberOfTransaction: 0,
            acheivements: []
        }
    ))
}