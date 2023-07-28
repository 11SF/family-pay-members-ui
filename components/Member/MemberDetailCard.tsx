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
  const transactions = familyStore((state) => state.transactions);

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
    }
  }, [transactions]);

  const getCountdownExpire = (memberExpire: Date) => {
    const now = new Date();

    const diffTime = memberExpire.getTime() - now.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };
  return (
    <div className="card lg:w-[32rem] xl:w-7/12 h-fit  bg-base-100 shadow-lg px-5 lg:px-12 py-5">
      <div className="my-10 divide-x sm:flex hidden">
        <div className="w-5/12 flex flex-col gap-8 justify-center items-center">
          <div className="avatar">
            {getCountdownExpire(member.expireDate) > 0 ? (
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={member.imageSrc} className="w-fit h-fit" />
              </div>
            ) : (
              <div className="w-36 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                <img src={member.imageSrc} className="w-fit h-fit" />
              </div>
            )}
          </div>
          <div className="text-center w-full flex flex-col gap-3 items-center justify-center">
            <p className="text-lg md:text-2xl overflow-hidden mx-auto">
              {member.name}
            </p>
            {getCountdownExpire(member.expireDate) > 0 ? (
              <div className="badge badge-primary text-white py-4 mx-auto">
                จ่ายแล้วจ้าาาา
              </div>
            ) : (
              <div className="badge badge-warning text-white py-4 mx-auto">
                ถึงเวลาจ่ายแล้วจ้าาา
              </div>
            )}
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
                <p>{getCountdownExpire(member.expireDate)} วัน</p>
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
      </div>
      <div className="my-10 block sm:hidden mx-auto">
        <div className="flex flex-col gap-8 justify-center items-center">
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
        <div className="mt-10">
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
                <p>{getCountdownExpire(member.expireDate)} วัน</p>
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
      </div>
    </div>
  );
}
