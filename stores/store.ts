import { AverageInfo, MemberAcheievement } from "@/models/achievement"
import { FamilyResponse } from "@/models/api/_family"
import { TransactionResponse } from "@/models/api/_transaction"
import { FamilyDetail, Member, PaymentDetail, convertFamilyDetailApiToModel, convertMemberApiToModel, convertPaymentDetailApiToModel } from "@/models/family"
import { Transaction, convertTransactionApiToModel, transactionFilter } from "@/models/transaction"
import { fetchFamilyByToken } from "@/services/family"
import { fetchTransaction } from "@/services/transaction"
import { create } from "zustand"


interface FamilyState {
    apiResponse: FamilyResponse | null
    familyTokenSelected: string | null
    familyDetail: FamilyDetail | null
    member: Member[]
    memberAchievement: MemberAcheievement[]
    paymentDetail: PaymentDetail | null
    transactions: Transaction[]
    fetchFamily: (token: string) => void
    fetchTransaction: () => void
    setMemberAchievement: (achievement: AverageInfo[]) => void
    getMemberAchievementByMemberId: (memberId: string) => MemberAcheievement | null
    getTransaction: (filters: transactionFilter) => Transaction[]
    getMemberDueDateList: () => Member[]
    initFamilyTokenSelected: (token: string) => void

    isFetch: () => boolean
    isFetchFamily: boolean
    isFetchTransaction: boolean
}

const familyStore = create<FamilyState>()((set, get) => ({
    apiResponse: null,
    familyTokenSelected: null,
    familyDetail: null,
    member: [],
    memberAchievement: [],
    paymentDetail: null,
    transactions: [],
    fetchFamily: async (token: string) => {
        if (get().isFetchFamily) {
            return
        }
        set({ isFetchFamily: true })
        const response = await fetchFamilyByToken(token) as FamilyResponse
        if (response) {
            set({ isFetchFamily: false })
            if (response._id) {
                set({
                    apiResponse: response,
                    // familyTokenSelected: response.token,
                    familyDetail: convertFamilyDetailApiToModel(response),
                    member: convertMemberApiToModel(response),
                    paymentDetail: convertPaymentDetailApiToModel(response),
                })
            }
        }
    },
    fetchTransaction: async () => {
        if (get().isFetchTransaction) {
            return
        }
        set({ isFetchTransaction: true })
        const response = await fetchTransaction(get().familyTokenSelected ?? "") as TransactionResponse[]
        if (response) {
            set({ isFetchTransaction: false })
            if (response.length > 0) {
                set({
                    transactions: convertTransactionApiToModel(response),
                })
            }
        }
    },
    setMemberAchievement: (achievement: AverageInfo[]) => {
        // convertMemberAchievementToModel(get().member, achievement)
        set({
            memberAchievement: achievement.map(e => ({
                memberId: e.memberId,
                acheievement: e.acheivements.map(i => ({ name: i }))
            }))
        })
    },
    getTransaction: (filters: transactionFilter): Transaction[] => {
        let result = get().transactions
        if (!result) {
            return []
        }
        if (filters?.familyId) {
            result = result.filter(e => (filters?.familyId === e.familyId))
        }
        if (filters?.memberId) {
            result = result.filter(e => (filters?.memberId === e.memberId))
        }
        return result
    },
    getMemberAchievementByMemberId: (memberId: string): MemberAcheievement | null => {
        let result = get().memberAchievement
        if (!result) {
            return null
        }
        if (memberId) {
            result = result.filter(e => (memberId === e.memberId))
        }
        return result[0]
    },
    getMemberDueDateList: (): Member[] => {
        const now = new Date();

        return get().member.filter(e => {
            const diffTime = e.expireDate.getTime() - now.getTime()
            
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

            return diffDays <= 0
        })
    },
    initFamilyTokenSelected: (queryToken: string) => {
        let localToken = localStorage.getItem("_familyTokenSelected")

        if (!localToken) {
            localStorage.setItem("_familyTokenSelected", queryToken)
            set({
                familyTokenSelected: queryToken
            })
            return
        }

        if (queryToken && (queryToken !== get().familyTokenSelected || queryToken !== localToken)) {
            localStorage.setItem("_familyTokenSelected", queryToken)
            set({
                familyTokenSelected: queryToken
            })
        } else {
            set({
                familyTokenSelected: localToken
            })
        }

    },

    isFetchFamily: false,
    isFetchTransaction: false,
    isFetch: (): boolean => {
        if (get().isFetchFamily || get().isFetchTransaction) {
            return true
        }

        return false
    }
}))

// const transactionStore = create<FamilyState>()((set) => ({
//     apiResponse: null,
//     familyTokenSelected: null,
//     familyDetail: null,
//     member: null,
//     paymentDetail: null,
//     isFetch: true,
//     fetchTransaction: async (token: string) => {
//         const response = await fetchTransaction() as TransactionResponse[]
//         if (response) {
//             set({ isFetch: false })
//             if (response.length > 0) {
//                 set({
//                     apiResponse: response,
//                     familyTokenSelected: response.token,
//                     familyDetail: convertFamilyDetailApiToModel(response),
//                     member: convertMemberApiToModel(response),
//                     paymentDetail: convertPaymentDetailApiToModel(response),
//                 })
//             }

//         }
//     },
// }))


export { familyStore }
