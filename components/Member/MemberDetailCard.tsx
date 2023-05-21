import { MemberAcheievement } from "@/models/achievement";
import { Member } from "@/models/family";
import { Transaction } from "@/models/transaction";
import { familyStore } from "@/stores/store";
import { getDateFormat } from "@/utils/date";
import { useState, useEffect } from "react";

interface propsType {
  member: Member;
}

export default function MemberDetailCard({ member }: propsType) {
  const getMemberAchievementByMemberId = familyStore(
    (state) => state.getMemberAchievementByMemberId
  );
  const getTransaction = familyStore((state) => state.getTransaction);

  const [_achievement, setAchievement] = useState<MemberAcheievement | null>(
    null
  );
  const [_transaction, setTransaction] = useState<Transaction[]>([]);
  useEffect(() => {
    let result = getMemberAchievementByMemberId(member.id);
    let transactionResult = getTransaction({ memberId: member.id });
    if (result) {
      setAchievement(result);
    }
    if (transactionResult.length > 0) {
      setTransaction(transactionResult);
      console.log(_transaction);
    }
  }, [getMemberAchievementByMemberId(member.id)]);
  return (
    <div className="card lg:w-[32rem] xl:w-7/12 h-fit  bg-base-100 shadow-lg px-5 lg:px-12 py-5">
      <div className="my-10 divide-x flex">
        <div className="w-5/12 flex flex-col gap-8 justify-center items-center">
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
              <img src={member.imageSrc} className="w-fit h-fit" />
            </div>
          </div>
          <div className="text-center w-full flex flex-col gap-3 items-center justify-center">
            <p className="text-lg md:text-2xl overflow-hidden mx-auto">
              {member.name}
            </p>
            <div className="badge badge-warning text-white py-4 mx-auto">
              ถึงเวลาจ่ายแล้วจ้าาา
            </div>
          </div>
        </div>
        <div className="w-7/12 pl-5">
          <div className="flex justify-between">
            <div className="flex flex-col gap-8 font-medium">
              <div className="flex flex-col gap-2">
                <p>จ่ายล่าสุด</p>
                <p>ราคาจ่ายล่าสุด</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>หมดอายุ</p>
                <p>จ่ายครั้งถัดไปในอีก</p>
              </div>
            </div>

            <div className="flex flex-col gap-8 font-medium text-end">
              <div className="flex flex-col gap-2">
                <p>{getDateFormat(member.lastDate)}</p>
                {_transaction.length > 0 ? (
                  <p>{_transaction[_transaction.length - 1].price} บาท</p>
                ) : (
                  <p>ไม่มีข้อมูล</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p>{getDateFormat(member.expireDate)}</p>
                <p>0 วัน</p>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <p className="mb-3">Achievement</p>
            <div className="flex gap-x-4 flex-wrap gap-y-3">
              {_achievement
                ? _achievement.acheievement.map((e, index) => (
                    <div
                      className="badge badge-primary text-white py-4"
                      key={index}
                    >
                      {e.name}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        {/* <div className="h-24 w-full hover:bg-base-200 hover:cursor-pointer ease-in-out duration-150 flex px-4 justify-between items-center">
          <div className="flex gap-10 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                <img src={member.imageSrc} className="w-fit h-fit" />
              </div>
            </div>
            <div className="text-lg md:text-2xl">{member.name}</div>
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
        </div> */}
      </div>
    </div>
  );
}
