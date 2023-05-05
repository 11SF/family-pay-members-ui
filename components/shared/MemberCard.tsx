export default function MemberCard() {
  return (
    <div className="w-full h-32 rounded-[20px] overflow-hidden bg-[#fff] shadow-lg relative">
      <div className="h-full w-6 absolute bg-warning" />
      <div className="w-full h-full grid grid-cols-12 justify-between items-center">
        {/* <div className="w-1/2 h-full bg-slate-500 flex justify-center items-center"> */}
        <div className="col-span-3 mx-auto">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
              <img src="https://media.discordapp.net/attachments/557626019247423508/1066976668859764766/image0.jpg?width=377&height=671" />
            </div>
          </div>
        </div>
        <div className="col-span-3 h-full flex flex-col justify-around text-left items-start">
          <p className="text-4xl font-bold">11SF</p>
        </div>
        {/* </div> */}
        <div className="col-span-6 h-full flex flex-col justify-around text-left items-start">
          {/* <div className="flex justify-center items-center gap-3">
            <div className="bg-yellow-500 rounded-full w-6 h-6" />
            <p className="text-md">ถึงกำหนดชำระเงิน</p>
          </div> */}
          <div className="badge badge-warning gap-2 py-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
            ถึงกำหนดชำระเงิน
          </div>
        </div>
      </div>
    </div>
  );
}
