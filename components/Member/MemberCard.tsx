import { Member } from "@/models/api/member";

interface propsType {
  member: Member;
}

export default function MemberCard({ member }: propsType) {
  return (
    <div className="card bg-base-100 w-[28rem] p-10 hover:scale-105 hover:cursor-pointer ease-in-out duration-150">
      <div className="flex gap-10 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
            <img src={member.imageSrc} className="w-fit h-fit" />
          </div>
        </div>
        <p className="text-2xl">{member.name}</p>
      </div>
      <div className="divider"></div>
      <div>
        <p className="mb-3">Achievement</p>
        <div className="flex gap-x-4">
          <div className="badge badge-secondary text-white py-4">primary</div>
          <div className="badge badge-secondary text-white py-4">primary</div>
          <div className="badge badge-secondary text-white py-4">primary</div>
        </div>
      </div>
    </div>
  );
}
