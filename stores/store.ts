import { FamilyResponse } from "@/models/api/family"
import { FamilyDetail, Member, PaymentDetail, convertFamilyDetailApiToModel, convertMemberApiToModel, convertPaymentDetailApiToModel } from "@/models/family"
import { fetchFamilyByToken } from "@/services/family"
import create from "zustand"

interface FamilyState {
    apiResponse: FamilyResponse | null
    familyTokenSelected: string | null
    familyDetail: FamilyDetail | null
    member: Member[] | null
    paymentDetail: PaymentDetail | null
    isFetch: boolean
    fetchFamily: (token: string) => void
    // setSubjectsScore: (subjectsScore: SubjectsScore) => void
    // setMenuSelected: (index: number) => void
    // setAvaliableSubjects: (subjects: Subject[]) => void
    // setSubjectIndexSelected: (index: number) => void
}

const familyStore = create<FamilyState>()((set) => ({
    apiResponse: null,
    familyTokenSelected: null,
    familyDetail: null,
    member: null,
    paymentDetail: null,
    isFetch: true,
    fetchFamily: async (token: string) => {
        const response = await fetchFamilyByToken(token) as FamilyResponse
        if (response) {
            set({ isFetch: false })
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


    // setSubjectsScore: (subjectsScore: SubjectsScore) => set(() => ({
    //     subjectsScore: subjectsScore
    // })),
    // setMenuSelected: (index: number) => set(() => ({
    //     menuSelected: index
    // })),
    // setAvaliableSubjects: (subjects: Subject[]) => set(() => ({
    //     avaliableSubjects: subjects
    // })),
    // setSubjectIndexSelected: (index: number) => set(() => ({
    //     subjectIndexSelected: index
    // })),
    // resetState: () => set(() => ({
    //     menuSelected: 0,
    //     subjectsScore: undefined,
    //     avaliableSubjects: [],
    //     subjectIndexSelected: 0,
    // })),
}))


export { familyStore }