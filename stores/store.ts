import { FamilyResponse } from "@/models/api/_family"
import { TransactionResponse } from "@/models/api/_transaction"
import { FamilyDetail, Member, PaymentDetail, convertFamilyDetailApiToModel, convertMemberApiToModel, convertPaymentDetailApiToModel } from "@/models/family"
import { Transaction, convertTransactionApiToModel, transactionFilter } from "@/models/transaction"
import { fetchFamilyByToken } from "@/services/family"
import { fetchTransaction } from "@/services/transaction"
import create from "zustand"


interface FamilyState {
    apiResponse: FamilyResponse | null
    familyTokenSelected: string | null
    familyDetail: FamilyDetail | null
    member: Member[] | null
    paymentDetail: PaymentDetail | null
    transactions: Transaction[] | null
    fetchFamily: (token: string) => void
    fetchTransaction: () => void
    getTransaction: (filters: transactionFilter) => Transaction[]

    isFetch: () => boolean
    isFetchFamily: boolean
    isFetchTransaction: boolean
    // setSubjectsScore: (subjectsScore: SubjectsScore) => void
    // setMenuSelected: (index: number) => void
    // setAvaliableSubjects: (subjects: Subject[]) => void
    // setSubjectIndexSelected: (index: number) => void
}

const familyStore = create<FamilyState>()((set, get) => ({
    apiResponse: null,
    familyTokenSelected: null,
    familyDetail: null,
    member: null,
    paymentDetail: null,
    transactions: null,
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
                    familyTokenSelected: response.token,
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
        const response = await fetchTransaction() as TransactionResponse[]
        if (response) {
            set({ isFetchTransaction: false })
            if (response.length > 0) {
                set({
                    transactions: convertTransactionApiToModel(response),
                })
            }

        }
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