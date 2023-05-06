import { stringToDateType } from "@/utils/date";
import { FamilyResponse } from "./api/family";

export interface FamilyDetail {
    id: string;
    familyName: string;
    dueDate: string;
    hostEmail: string;
    platform: string;
    token: string;
}

export interface Member {
    id: string;
    name: string;
    imageSrc: string;
    lastDate: Date;
    expireDate: Date;
}

export interface Price {
    id: string
    month: number
    price: number
}

export interface PaymentDetail {
    ppNumber: string
    prices: Price[]
}

export function convertMemberApiToModel(response: FamilyResponse): Member[] {
    return response.members.map(
        (e): Member => ({
            id: e._id ?? "",
            name: e.name ?? "",
            imageSrc: e.img_src ?? "",
            lastDate: stringToDateType(e.lastDate ?? ""),
            expireDate: stringToDateType(e.expireDate ?? ""),
        })
    );
}

export function convertFamilyDetailApiToModel(response: FamilyResponse): FamilyDetail {
    return {
        id: response._id,
        familyName: response.familyName,
        dueDate: response.dueDate,
        hostEmail: response.hostEmail,
        platform: response.platform,
        token: response.token,
    }
}

export function convertPaymentDetailApiToModel(response: FamilyResponse): PaymentDetail {
    return {
        ppNumber: response.ppNumber,
        prices: response.prices.map((e): Price => (
            {
                id: e._id,
                month: parseInt(e.month, 10),
                price: parseInt(e.price, 10)
            }
        ))
    }
}
