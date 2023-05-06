import { generatePromptpayPayload } from "@/services/generatePromptpayQr";
import { Kanit } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import ppLogo from "../assets/pp_logo.svg";
import spotifyLogo from "../assets/Spotify_logo.svg";
import youTubePremiumLogo from "../assets/YouTube_Premium_logo.svg";
import QrPayment from "@/components/shared/QrPayment";
import DueDateListCard from "@/components/Member/DueDateListCard";
import { convertMemberApiToModel } from "@/models/api/member";
import MemberCard from "@/components/Member/MemberCard";
import FamilyCard from "@/components/shared/FamilyCard";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const [qrPayload, setQrPayload] = useState(null);
  const [priceSelected, setPriceSelected] = useState({
    month: 1,
    price: 35,
  });
  // const [memberHover, setMemberHover] = useState<any>("");

  useEffect(() => {
    setQrPayload(generatePromptpayPayload("0623510099", priceSelected.price));
  }, [priceSelected]);

  const prices = [
    {
      month: 1,
      price: 35,
    },
    {
      month: 2,
      price: 70,
    },
    {
      month: 3,
      price: 105,
    },
    {
      month: 6,
      price: 210,
    },
    {
      month: 12,
      price: 420,
    },
  ];

  const members = [
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
  ];

  return (
    <main className={`${kanit.className} bg-base-200`}>
      <div className="navbar bg-primary">
        <div className="flex justify-between container mx-auto text-base-100">
          <a className="normal-case text-xl font-bold">Family Pay</a>
          <div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost normal-case text-xl font-extralight"
              >
                บ้านแสนสุข
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>เพิ่มครอบครัว</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full container mx-auto pt-12 flex justify-between">
        <DueDateListCard members={convertMemberApiToModel(members)} />

        <div className="w-4/12 min-w-[29rem] flex flex-col gap-10">
          {/* <div className="card w-full bg-base-100 shadow-lg px-12 py-5">
            <div className="w-full flex justify-center gap-10 items-center">
              <Image src={spotifyLogo} alt={"platform logo"} height={50} />
              <p className="text-3xl">บ้านแสนสุข</p>
            </div>
            <div className="divider"></div>
            <p className="text-lg text-center font-light">
              จ่ายเงินทุกๆ วันที่ 3 ของเดือน
            </p>
          </div> */}
          <FamilyCard familyDetail={undefined} />
          <div className="card bg-base-100 shadow-lg w-full px-12 py-5">
            <p className="text-2xl font-medium">ช่องทางชำระเงิน</p>

            <div className="w-full flex justify-between items-center pt-6">
              <div className="flex items-center gap-12">
                <div className="w-[55px] h-[55px] bg-[#01427D] rounded-full flex justify-center items-center">
                  <Image src={ppLogo} alt={"pp_logo"} width={43} height={27} />
                </div>
                <p className="text-xl">062-351-0099</p>
              </div>
              <div className="flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>

                <p>copy</p>
              </div>
            </div>

            <div className="divider"></div>

            <div className="w-full h-auto flex gap-6">
              <div className="h-fit">
                {qrPayload !== null ? <QrPayment payload={qrPayload} /> : null}
              </div>
              <div className="w-full flex justify-between">
                <div className="flex flex-col justify-around font-medium">
                  <p>จำนวน</p>
                  <p>ราคา</p>
                  <p>ปลายทาง</p>
                </div>
                <div className="flex flex-col justify-around text-end">
                  <p>{priceSelected.month} เดือน</p>
                  <p>{priceSelected.price} บาท</p>
                  <p>062-351-0099</p>
                </div>
              </div>
            </div>

            <div className="w-full h-auto">
              <p className="py-2">จำนวนเดือนที่ต้องการจ่าย</p>
              <div className="flex justify-between flex-wrap mt-4">
                {prices.map((e, index) =>
                  e.month === priceSelected.month ? (
                    <div
                      className="w-28 h-10 rounded-lg bg-primary text-xl text-white mb-4 flex justify-center items-center hover:cursor-pointer"
                      key={index}
                    >
                      <p>{e.month}</p>
                    </div>
                  ) : (
                    <div
                      className="w-28 h-10 rounded-lg bg-base-200 text-xl mb-4 flex justify-center items-center font-light hover:cursor-pointer"
                      key={index}
                      onClick={() => setPriceSelected(e)}
                    >
                      <p>{e.month}</p>
                    </div>
                  )
                )}
                <div className="w-28 h-10 flex justify-center items-center text-2xl">
                  {priceSelected.price} ฿
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="divider text-4xl py-24">สมาชิกทั้งหมด</div> */}

      <section className="w-full bg-neutral mt-8 flex justify-center">
        {/* <div className="card w-6/12 bg-white shadow-lg px-12 py-5">
          <p className="text-2xl font-medium">สมาชิกทั้งหมด</p>
          <div className="my-10 divide-y">
            {members.map((e, index) => (
              <div
                className="h-24 w-full hover:bg-base-200 hover:cursor-pointer ease-in-out duration-150 flex px-4 justify-between items-center"
                onMouseEnter={() => setMemberHover(e)}
                key={index}
              >
                <div className="flex gap-10 items-center h-full">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={e.img_src} className="w-fit h-fit" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-center h-full">
                    <p className="text-2xl">{e.name}</p>
                    <div className="flex gap-x-4">
                      <div className="badge badge-primary text-white">
                        primary
                      </div>
                      <div className="badge badge-primary text-white">
                        primary
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hover:scale-105 hover:bg-base-200 ease-in-out p-2 rounded-full duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:scale-120"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="h-full container mx-auto">
          <p className="text-3xl text-center my-10 text-white">สมาชิกทั้งหมด</p>
          <div className="flex flex-wrap gap-10 justify-center">
            {convertMemberApiToModel(members).map((e) => (
              <MemberCard member={e} key={e.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
//bg-[#1882df]
