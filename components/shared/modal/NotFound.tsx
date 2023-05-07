import { Player } from "@lottiefiles/react-lottie-player";

export default function NotFound() {
  return (
    <div className="h-screen w-full text center flex flex-col items-center justify-center bg-base-200">
      <Player
        className="h-64"
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets1.lottiefiles.com/packages/lf20_tmsiddoc.json"
        // style={{ height: "300px", width: "300px" }}
      ></Player>
      <p className="text-xl mt-4">ไม่พบข้อมูล</p>
    </div>
  );
}

//
