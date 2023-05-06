import { stringToDateType } from "@/utils/date";

export interface Member {
  id: string;
  name: string;
  imageSrc: string;
  lastDate: Date;
  expireDate: Date;
}

export function convertMemberApiToModel(response: any[]): Member[] {
  return response.map(
    (e): Member => ({
      id: e._id ?? "",
      name: e.name ?? "",
      imageSrc: e.img_src ?? "",
      lastDate: stringToDateType(e.lastDate?? ""),
      expireDate: stringToDateType(e.expireDate?? ""),
    })
  );
}
