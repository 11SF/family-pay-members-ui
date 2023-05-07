import spotifyLogo from "@/assets/Spotify_logo.svg";
import youTubePremiumLogo from "@/assets/YouTube_Premium_logo.svg";
import { FamilyDetail } from "@/models/family";
import Image from "next/image";

interface propsType {
  familyDetail: FamilyDetail;
}

const getPlatformLogo = (platform: string): any => {
  switch (platform.toLowerCase()) {
    case "spotify":
      return <Image src={spotifyLogo} alt={"platform logo"} width={120} />;
    case "youtube":
      return (
        <Image src={youTubePremiumLogo} alt={"platform logo"} width={120} />
      );
    default:
      return "";
  }
};

export default function FamilyCard({ familyDetail }: propsType) {
  return (
    <div className="card w-full bg-base-100 shadow-lg px-12 py-5">
      <div className="w-full flex justify-center gap-10 items-center mt-3">
        {getPlatformLogo(familyDetail.platform)}
        <p className="text-xl">{familyDetail.familyName}</p>
      </div>
      <div className="divider"></div>
      <p className="text-lg text-center font-light">
        จ่ายเงินทุกๆ วันที่ {familyDetail.dueDate} ของเดือน
      </p>
    </div>
  );
}
