import { useQRCode } from "next-qrcode";

interface propsType {
  payload: string;
}

export default function QrPayment({ payload }: propsType) {
  const { Canvas  } = useQRCode();
  return (
    <Canvas
      text={payload}
      options={{
        level: "M",
        margin: 3,
        scale: 4,
        // width: 200,
        color: {
          dark: "#000",
          light: "#FFF",
        },
      }}
      logo={{
        src: "/app_logo.png",
        options: {
            width: 40
        }
      }}
    />
  );
}
