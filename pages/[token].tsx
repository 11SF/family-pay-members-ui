import DueDateListCard from "@/components/Member/DueDateListCard";
import MemberCard from "@/components/Member/MemberCard";
import FamilyCard from "@/components/shared/FamilyCard";
import PaymentCard from "@/components/shared/PaymentCard";
import Loading from "@/components/shared/modal/Loading";
import NotFound from "@/components/shared/modal/NotFound";
// import { getFamilyByToken, mock } from "@/services/family";
import { familyStore } from "@/stores/store";
import { Kanit } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const familyDetail = familyStore((state) => state.familyDetail);
  const isFetch = familyStore((state) => state.isFetch);
  const member = familyStore((state) => state.member);
  const paymentDetail = familyStore((state) => state.paymentDetail);
  const router = useRouter();

  const familyApiResponse = familyStore((state) => state.apiResponse);
  const fetchFamily = familyStore((state) => state.fetchFamily);
  useEffect(() => {
    if (!familyApiResponse) {
      let token = router.query.token;
      if (token) {
        fetchFamily(token as string);
      }
      console.log(token);
    }
  }, [router.query.token]);

  return (
    <main className={`${kanit.className} bg-base-200`}>
      <div className="navbar bg-primary hidden lg:block">
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

      {isFetch ? (
        <Loading />
      ) : familyApiResponse ? (
        <>
          <section className="w-full container mx-auto pt-12 justify-between hidden lg:flex">
            {member ? <DueDateListCard members={member} /> : null}

            <div className="w-4/12 min-w-[29rem] flex flex-col gap-10">
              {familyDetail ? <FamilyCard familyDetail={familyDetail} /> : null}

              {paymentDetail ? (
                <PaymentCard paymentDetail={paymentDetail} />
              ) : null}
            </div>
          </section>

          <section className="w-full block lg:hidden">
            <div className="w-full h-48 mx-auto bg-primary text-base-100 flex flex-col justify-center items-center gap-10">
              <p className="text-5xl text-center">{familyDetail?.familyName}</p>
              <p className="text-lg text-center font-light">
                จ่ายเงินทุกๆ วันที่ {familyDetail?.dueDate} ของเดือน
              </p>
            </div>
            <div className="container mx-auto my-10 flex flex-col gap-10">
              {member ? <DueDateListCard members={member} /> : null}
              {paymentDetail ? (
                <PaymentCard paymentDetail={paymentDetail} />
              ) : null}
            </div>
          </section>

          <section className="w-full bg-neutral mt-8 flex justify-center">
            <div className="h-full container mx-auto">
              <p className="text-3xl text-center my-10 text-white">
                🌟 สมาชิกทั้งหมด 🌟
              </p>
              {member ? (
                <div className="flex flex-wrap gap-10 justify-center">
                  {member.map((e) => (
                    <MemberCard member={e} key={e.id} />
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}
