import { Member } from "@/models/family";

interface propsType {
  members: Member[];
}

export default function DueDateListCard({ members }: propsType) {
  return (
    <div className="card lg:w-[32rem] xl:w-7/12 h-fit  bg-base-100 shadow-lg px-5 lg:px-12 py-5">
      <p className="text-2xl font-medium">ถึงเวลาจ่ายละจ้าาาาา 🎉</p>
      <div className="my-10 divide-y">
        {members.map((e) => (
          <div
            className="h-24 w-full hover:bg-base-200 hover:cursor-pointer ease-in-out duration-150 flex px-4 justify-between items-center"
            key={e.id}
          >
            <div className="flex gap-10 items-center">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                  <img src={e.imageSrc} className="w-fit h-fit" />
                </div>
              </div>
              <div className="text-lg md:text-2xl">{e.name}</div>
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
    </div>
  );
}
