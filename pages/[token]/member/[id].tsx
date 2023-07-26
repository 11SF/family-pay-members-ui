import DueDateListCard from "@/components/Member/DueDateListCard";
import MemberCard from "@/components/Member/MemberCard";
import MemberDetailCard from "@/components/Member/MemberDetailCard";
import FamilyCard from "@/components/shared/FamilyCard";
import PaymentCard from "@/components/shared/PaymentCard";
import Loading from "@/components/shared/modal/Loading";
import NotFound from "@/components/shared/modal/NotFound";
import { AverageInfo } from "@/models/achievement";
import { Transaction } from "@/models/transaction";
import { initAchievement } from "@/services/calculateAchievement ";
import { familyStore } from "@/stores/store";
import { getDateFormat } from "@/utils/date";
import { kanit } from "@/utils/fontsStyle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function member() {
  const router = useRouter();
  const { id, token } = router.query;

  const [isFetch, setIsFetch] = useState(true);
  const [achievement, setAchievement] = useState<AverageInfo[]>([]);
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  const familyDetail = familyStore((state) => state.familyDetail);
  const isFetchStore = familyStore((state) => state.isFetch);
  const isFetchFamily = familyStore((state) => state.isFetchFamily);
  const isFetchTransaction = familyStore((state) => state.isFetchTransaction);
  const member = familyStore((state) => state.member);
  const paymentDetail = familyStore((state) => state.paymentDetail);

  const familyApiResponse = familyStore((state) => state.apiResponse);
  const fetchFamily = familyStore((state) => state.fetchFamily);
  const familyTokenSelected = familyStore((state) => state.familyTokenSelected);
  const getTransaction = familyStore((state) => state.getTransaction);
  const fetchTransaction = familyStore((state) => state.fetchTransaction);
  const transactions = familyStore((state) => state.transactions);
  const setMemberAchievement = familyStore(
    (state) => state.setMemberAchievement
  );
  const getMemberAchievementByMemberId = familyStore(
    (state) => state.getMemberAchievementByMemberId
  );
  const getMemberDueDateList = familyStore(
    (state) => state.getMemberDueDateList
  );
  const initFamilyTokenSelected = familyStore(
    (state) => state.initFamilyTokenSelected
  );

  useEffect(() => {
    let token = router.query.token;
    initFamilyTokenSelected(token as string);
  }, [router.query.token]);

  useEffect(() => {
    let token = router.query.token as string;
    if (familyTokenSelected && familyTokenSelected === token) {
      fetchFamily(familyTokenSelected);
      fetchTransaction();
    }
  }, [familyTokenSelected, router.query.token]);

  useEffect(() => {
    // console.log(transactions);

    if (
      transactions.length > 0 &&
      familyTokenSelected &&
      member.length > 0 &&
      achievement.length === 0
    ) {
      setAchievement(
        initAchievement(member, transactions, familyTokenSelected)
      );
      setTransaction(getTransaction({ memberId: member[5].id }));
    }
  }, [transactions, member]);

  useEffect(() => {
    if (achievement.length > 0) {
      setMemberAchievement(achievement);
    }
  }, [achievement]);

  useEffect(() => {
    setIsFetch(isFetchStore);
  }, [isFetchFamily, isFetchTransaction]);

  return (
    <main className={`${kanit.className} bg-base-200`}>
      {isFetch ? (
        <Loading />
      ) : familyApiResponse ? (
        <>
          <section className="w-full container mx-auto pt-12 justify-between hidden lg:flex">
            {/* {getMemberDueDateList() ? (
              <DueDateListCard members={getMemberDueDateList()} />
            ) : null} */}
            {/* <DueDateListCard members={getMemberDueDateList()} /> */}
            <MemberDetailCard member={member[5]} />

            <div className="w-4/12 min-w-[29rem] flex flex-col gap-10">
              {familyDetail ? <FamilyCard familyDetail={familyDetail} /> : null}

              {paymentDetail ? (
                <PaymentCard paymentDetail={paymentDetail} />
              ) : null}
            </div>
          </section>

          <section className="w-full block lg:hidden">
            <div className="w-full h-48 mx-auto bg-primary text-base-100 flex flex-col justify-center items-center gap-10">
              <p className="text-[10vw] sm:text-5xl text-center">
                {familyDetail?.familyName}
              </p>
              <p className="text-lg text-center font-light">
                จ่ายเงินทุกๆ วันที่ {familyDetail?.dueDate} ของเดือน
              </p>
            </div>
            <div className="container mx-auto my-10 flex flex-col gap-10">
              <MemberDetailCard member={member[5]} />
              {paymentDetail ? (
                <PaymentCard paymentDetail={paymentDetail} />
              ) : null}
            </div>
          </section>

          <section className="w-full bg-neutral mt-8 flex justify-center">
            <div className="h-full container mx-auto">
              <p className="text-3xl text-center my-10 text-white">
                🌟 ประวัติการจ่ายเงิน 🌟
              </p>
              {/* {member ? (
                <div className="flex flex-wrap gap-10 justify-center">
                  {member.map((e) => (
                    <MemberCard
                      member={e}
                      key={e.id}
                      achievement={getMemberAchievementByMemberId(e.id)}
                    />
                  ))}
                </div>
              ) : null} */}
              <div className="overflow-x-auto">
                <table className="table p-10 mx-auto">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>วันที่</th>
                      <th>ราคาจ่าย</th>
                      <th>วันหมดอายุเดิม</th>
                      <th>วันหมดอายุใหม่</th>
                      <th>สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaction.map((e) => (
                      <tr key={e.id}>
                        <th>{getDateFormat(new Date(e.createdAt ?? ""))}</th>
                        <td>{e.price}</td>
                        <td>{getDateFormat(new Date(e.oldExpireDate))}</td>
                        <td>{getDateFormat(new Date(e.newExpireDate))}</td>
                        <td>{e.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}
