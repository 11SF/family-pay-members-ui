import { axiosInstance } from "@/axiosInstance";
import { FamilyResponse } from "@/models/api/_family";

export const fetchFamilyByToken = async (token: string) => {

    return axiosInstance.get("/member/get/family", {
        params: {
            token
        }
    }).then((response): FamilyResponse | boolean => {

        if (response.status === 200) {
            // Router.replace("/scores");
            return response.data as FamilyResponse;
        } else {
            return false
        }

    }).catch((err) => {
        console.log("fetch error : ", err);
        return false
    })
}
