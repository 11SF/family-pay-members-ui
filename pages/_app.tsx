import { FamilyResponse } from "@/models/api/family";
import { getFamilyByToken } from "@/services/family";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") console.log = function () {};
  }, []);

  // const [data, setData] = useState<FamilyResponse>();

  // const initData = async () => {
  //   let result = await getFamilyByToken("FFmZb");
  //   if (result != false) {
  //     setData(result as FamilyResponse);
  //   }
  // };

  // useEffect(() => {
  //   initData();
  // }, []);

  return <Component {...pageProps} />;
}
