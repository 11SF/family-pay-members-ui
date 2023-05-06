import spotifyLogo from "@/assets/Spotify_logo.svg";
import youTubePremiumLogo from "@/assets/YouTube_Premium_logo.svg";
import { FamilyDetail } from "@/models/api/familyDetail";
import Image from "next/image";

interface propsType {
  familyDetail: FamilyDetail;
}

const getPlatformLogo = (platform: string): any => {
  switch (platform.toLowerCase()) {
    case "spotify":
      return spotifyLogo;
    case "youtube":
      return youTubePremiumLogo;
    default:
      return "";
  }
};

export default function FamilyCard({ familyDetail }: propsType) {
  return (
    <div className="card w-full bg-base-100 shadow-lg px-12 py-5">
      <div className="w-full flex justify-center gap-10 items-center">
        <Image
          src={getPlatformLogo(familyDetail.platform)}
          alt={"platform logo"}
          height={50}
        />
        <p className="text-3xl">{familyDetail.familyName}</p>
      </div>
      <div className="divider"></div>
      <p className="text-lg text-center font-light">
        จ่ายเงินทุกๆ วันที่ {familyDetail.dueDate} ของเดือน
      </p>
    </div>
  );
}
