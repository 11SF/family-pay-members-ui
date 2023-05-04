import { Kanit } from "next/font/google";
import Tabs from "@/components/shared/Tabs";
import { tabsContent } from "@/models/components/shared/tabs";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log(tabsSelected);
    
  }, [tabsSelected]);

  return (
    <main className={`${kanit.className} bg-[#f4f4f4]`}>
      <div className="navbar bg-[#006ac8] text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">บ้านแสนสุข</a>
      </div>

      <div className="grid grid-cols-6">
        <div className="grid col-span-4 bg-[#f4f4f4]">
          <div className="bg-[#006ac8] h-44 rounded-b-[40px] flex justify-center items-start px-24">
            <div className="w-full mt-12">
              <Tabs
                tabs={tabs}
                currentTabs={tabsSelected}
                setterFunc={setTabSelected}
              />
            </div>
            {/* <p>{tabsSelected}</p> */}
          </div>
        </div>
        <div className="grid col-span-2 bg-[#006ac8]">
          <div className="bg-[#f4f4f4] h-44 rounded-t-[40px]"></div>
        </div>
      </div>
    </main>
  );
}
