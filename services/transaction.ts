import { axiosInstance, axiosInstanceTransactionService } from "@/axiosInstance"
import { TransactionResponse } from "@/models/api/_transaction"

export const fetchTransaction = async () => {

    return axiosInstanceTransactionService.get("", {
    }).then((response): TransactionResponse[] | boolean => {

        if (response.status === 200) {
            return response.data as TransactionResponse[];
        } else {
            return false
        }

    }).catch((err) => {
        console.log("fetch error : ", err);
        return false
    })
}

