import { axiosInstance } from "@/axiosInstance";
import { FamilyResponse } from "@/models/api/family";

export let mock = {
    _id: "614b59f2cef77ec6e1fb51e3",
    token: "FFmZb",
    hostEmail: "nsfolknsf@gmail.com",
    familyName: "บ้านแสนสุข",
    platform: "spotify",
    members: [
        {
            countMonth: 0,
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/944138246307323914/unknown.png",
            _id: "614b5b32cef77ec6e1fb51e5",
            name: "nayvintage",
            lastDate: "2023-04-05T00:00:00.000Z",
            expireDate: "2023-06-03T00:00:00.000Z",
        },
        {
            countMonth: 0,
            img_src:
                "https://cdn.discordapp.com/attachments/942481464983957536/993194561994244157/A46EA8C3-D4E9-42C6-8632-38E2C9A76879.jpg",
            _id: "614b5b4dcef77ec6e1fb51e7",
            name: "MrNoNDarkZ",
            lastDate: "2023-03-06T00:00:00.000Z",
            expireDate: "2023-06-03T00:00:00.000Z",
        },
        {
            countMonth: 0,
            img_src:
                "https://lh3.googleusercontent.com/pw/AM-JKLXWHqfmRn7yCSXwGMvoiYN53hE6Ro_Qs1PjpH7_zWuLYRJfBoFWUSZNk-OzuEiMb65Y3EDna6cMDYHNK5Ob1h4FtfVNXZQSlYP5kdeYx8q1xpBqhsvlYCEAnznAMSkFYgylOZMCRTwQ-JGFXilR8SIQnQ=w1454-h969-no?authuser=0",
            _id: "614b5b58cef77ec6e1fb51ea",
            name: "ปอ ค้าบบบบบบ",
            lastDate: "2023-04-05T00:00:00.000Z",
            expireDate: "2023-07-03T00:00:00.000Z",
        },
        {
            countMonth: 0,
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/944138682305232946/unknown.png",
            _id: "614b5b62cef77ec6e1fb51ee",
            name: "ริวค้าบบบ",
            lastDate: "2023-04-05T00:00:00.000Z",
            expireDate: "2023-05-03T00:00:00.000Z",
        },
        {
            countMonth: 0,
            img_src:
                "https://media.discordapp.net/attachments/557626019247423508/872252290050961468/164240416_2861818567416302_6631470340161862859_n.png",
            _id: "614b5b75cef77ec6e1fb51f3",
            name: "Only_Golf",
            lastDate: "2023-05-05T00:00:00.000Z",
            expireDate: "2023-06-03T00:00:00.000Z",
        },
        {
            countMonth: 0,
            img_src:
                "https://media.discordapp.net/attachments/557626019247423508/1066976668859764766/image0.jpg?width=377&height=671",
            _id: "614b5b80cef77ec6e1fb51f9",
            name: "11SF",
            lastDate: "2023-03-01T00:00:00.000Z",
            expireDate: "2023-06-03T00:00:00.000Z",
        },
    ],
    prices: [
        {
            _id: "616040ce7da785cd7e4e1efd",
            price: "35",
            month: "1",
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/896018987878588466/pp_35.jpeg",
        },
        {
            _id: "616041277da785cd7e4e1eff",
            price: "70",
            month: "2",
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/896019022498365490/pp_70.jpeg",
        },
        {
            _id: "6160416e7da785cd7e4e1f02",
            price: "105",
            month: "3",
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/896019024314507315/pp_105.jpeg",
        },
        {
            _id: "616041897da785cd7e4e1f06",
            price: "210",
            month: "6",
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/896019026814328852/pp_210.jpeg",
        },
        {
            _id: "616041a97da785cd7e4e1f0b",
            price: "420",
            month: "12",
            img_src:
                "https://cdn.discordapp.com/attachments/557626019247423508/896018988553883668/pp_420.jpeg",
        },
    ],
    __v: 0,
    ppNumber: "0940932105",
    dueDate: "3",
};


export const getFamilyByToken = async (token: string) => {

    return axiosInstance.get("/member/get/family", {
        params: {
            token
        }
    }).then((response): FamilyResponse | boolean => {

        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data))
            console.log(response.data)
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
