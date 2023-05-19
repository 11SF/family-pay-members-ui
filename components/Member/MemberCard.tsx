import { MemberAcheievement } from "@/models/achievement";
import { Member } from "@/models/family";
import { familyStore } from "@/stores/store";
import { useEffect, useState } from "react";

interface propsType {
  member: Member;
  achievement: MemberAcheievement | null;
}

export default function MemberCard({ member, achievement }: propsType) {
  const getMemberAchievementByMemberId = familyStore(
    (state) => state.getMemberAchievementByMemberId
  );
  const [_achievement, setAchievement] = useState<MemberAcheievement | null>(
    null
  );
  useEffect(() => {
    let result = getMemberAchievementByMemberId(member.id);
    if (result) {
      setAchievement(result);
    }
  }, [getMemberAchievementByMemberId(member.id)]);
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
          {_achievement
            ? _achievement.acheievement.map((e, index) => (
                <div
                  className="badge badge-secondary text-white py-4"
                  key={index}
                >
                  {e.name}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
// getMemberAchievementByMemberId
