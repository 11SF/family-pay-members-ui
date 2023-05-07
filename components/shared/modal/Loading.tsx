import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div className="h-screen w-full text center flex flex-col items-center justify-center bg-base-200">
      <Player
        className="h-64"
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets6.lottiefiles.com/packages/lf20_dFV0j6KCRH.json"
        // style={{ height: "300px", width: "300px" }}
      ></Player>
      <p className="text-xl mt-4 animate-bounce">Loading...</p>
    </div>
  );
}

//
