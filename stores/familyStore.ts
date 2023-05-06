import create from "zustand"

interface FamilyState {
    // reviewIndex: number | undefined,
    // menuSelected: number
    // subjectsScore: SubjectsScore | undefined,
    // avaliableSubjects: Subject[]
    // subjectIndexSelected: number
    // maxIndex: number
    // setSubjectsScore: (subjectsScore: SubjectsScore) => void
    // setMenuSelected: (index: number) => void
    // setAvaliableSubjects: (subjects: Subject[]) => void
    // setSubjectIndexSelected: (index: number) => void
}

const familyStore = create<FamilyState>()((set) => ({
    // reviewIndex: undefined,
    // menuSelected: 0,
    // subjectsScore: undefined,
    // avaliableSubjects: [],
    // subjectIndexSelected: 0,
    // maxIndex: 0,

    // setReviewIndex: (reviewIndex: number) => set(() => ({
    //     reviewIndex: reviewIndex
    // })),


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
