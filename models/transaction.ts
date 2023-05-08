import { TransactionResponse } from "./api/_transaction"

export interface Transaction {
    id: number
    createdAt: string | null
    updatedAt: string | null
    deletedAt: string | null
    memberId: string
    name: string
    familyId: string
    familyName: string
    price: number
    month: number
    oldExpireDate: string
    newExpireDate: string
    dateOverdue: number
    status: string
}

export interface transactionFilter {
    memberId?: string
    familyId?: string
}

export function convertTransactionApiToModel(response: TransactionResponse[], filters?: transactionFilter): Transaction[] {
    return response.map(e => (
        {
            id: e.ID,
            createdAt: e.CreatedAt,
            updatedAt: e.UpdatedAt,
            deletedAt: e.DeletedAt,
            memberId: e.member_id,
            name: e.name,
            familyId: e.family_id,
            familyName: e.name,
            price: e.price,
            month: e.month,
            oldExpireDate: e.old_expire_date,
            newExpireDate: e.new_expire_date,
            dateOverdue: e.date_overdue,
            status: e.status,
        }
    ))
    // if (filters?.familyId) {
    //     result = result.filter(e => (filters?.familyId === e.familyId))
    // }
    // if (filters?.memberId) {
    //     result = result.filter(e => (filters?.memberId === e.memberId))
    // }

    // return result
}