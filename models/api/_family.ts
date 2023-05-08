interface Member {
  _id: string
  name: string
  img_src: string
  lastDate: string
  expireDate: string
  countMonth: number
}

interface Price {
  _id: string
  month: string
  price: string
  img_src: string
}

export interface FamilyResponse {
  _id: string;
  familyName: string;
  dueDate: string;
  hostEmail: string;
  platform: string;
  token: string;
  members: Member[]
  prices: Price[]
  ppNumber: string
}


