import { Kanit } from "next/font/google";
import Tabs from "@/components/shared/Tabs";
import { tabsContent } from "@/models/components/shared/tabs";
import { useEffect, useState } from "react";
import { generatePromptpayPayload } from "@/services/generatePromptpayQr";
import MemberCard from "@/components/shared/MemberCard";

const kanit = Kanit({ subsets: ["thai"], weight: ["200"] });

export default function Home() {
  const tabs: tabsContent[] = [
    {
      id: 1,
      name: "ถึงกำหนดชำระเงิน",
    },
    {
      id: 2,
      name: "สมาชิกทั้งหมด",
    },
    {
      id: 3,
      name: "จัดอันดับ",
    },
  ];

  const [tabsSelected, setTabSelected] = useState(tabs[0]);
  const [qrPayload, setQrPayload] = useState(null);

  useEffect(() => {
    setQrPayload(generatePromptpayPayload("0623510099", 35));
  }, []);

  return (
    <main className={`${kanit.className}`}>
      {/* <div className="navbar bg-primary text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl text-[#fff]">
          Family Pay
        </a>
      </div> */}

      <div className="header finisher-header" >
        Logo, navigation, etc.
      </div>
      {/* <div className="h-52 rounded-br-[20rem] justify-center shadow-xl items-center overflow-hidden">
        <div className="bg-primary w-full h-full" /> */}

        {/* <div className="w-full col-span-8 px-24">
          <Tabs
            tabs={tabs}
            currentTabs={tabsSelected}
            setterFunc={setTabSelected}
          />
        </div>

        <div className="col-span-4 flex items-center">
          <p className="text-5xl text-center mx-auto font-bold text-white">
            บ้านแสนสุข
          </p>
        </div> */}
      {/* </div> */}

      {/* <div className="grid grid-cols-12 -mt-14 h-screen">
        <div className="w-full h-full col-span-8 px-20">
          <MemberCard />
        </div>
        <div className="w-full h-full col-span-4 bg-[#fff] rounded-tl-[40px]">
          sddd
        </div>
      </div> */}
    </main>
  );
}
//bg-[#1882df]
