import DueDateListCard from "@/components/Member/DueDateListCard";
import MemberCard from "@/components/Member/MemberCard";
import FamilyCard from "@/components/shared/FamilyCard";
import PaymentCard from "@/components/shared/PaymentCard";
import { FamilyResponse } from "@/models/api/family";
import {
  convertFamilyDetailApiToModel,
  convertMemberApiToModel,
  convertPaymentDetailApiToModel,
} from "@/models/family";
import { getFamilyByToken, mock } from "@/services/family";
import { Kanit } from "next/font/google";
import { useState, useEffect } from "react";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const [data, setData] = useState<FamilyResponse>();

  const initData = async () => {
    let result = await getFamilyByToken("FFmZb");
    if (result != false) {
      setData(result as FamilyResponse);
    }
  };

  useEffect(() => {
    initData();
  }, []);

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

      {data ? (
        <>
          <section className="w-full container mx-auto pt-12 flex justify-between">
            <DueDateListCard members={convertMemberApiToModel(data)} />

            <div className="w-4/12 min-w-[29rem] flex flex-col gap-10">
              <FamilyCard familyDetail={convertFamilyDetailApiToModel(data)} />

              <PaymentCard
                paymentDetail={convertPaymentDetailApiToModel(data)}
              />
            </div>
          </section>

          <section className="w-full bg-neutral mt-8 flex justify-center">
            <div className="h-full container mx-auto">
              <p className="text-3xl text-center my-10 text-white">
                สมาชิกทั้งหมด
              </p>
              <div className="flex flex-wrap gap-10 justify-center">
                {convertMemberApiToModel(data).map((e) => (
                  <MemberCard member={e} key={e.id} />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        ""
      )}
    </main>
  );
}
