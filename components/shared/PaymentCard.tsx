import { generatePromptpayPayload } from "@/services/generatePromptpayQr";
import { useState, useEffect } from "react";
import QrPayment from "./QrPayment";
import Image from "next/image";
import ppLogo from "@/assets/pp_logo.svg";
import { PaymentDetail } from "@/models/family";
import { getPhoneNumberFormat } from "@/utils/stringFormat";

interface propsType {
  paymentDetail: PaymentDetail;
}

export default function PaymentCard({ paymentDetail }: propsType) {
  const [qrPayload, setQrPayload] = useState(null);
  const [priceSelected, setPriceSelected] = useState(paymentDetail.prices[0]);

  useEffect(() => {
    setQrPayload(
      generatePromptpayPayload(paymentDetail.ppNumber, priceSelected.price)
    );
  }, [priceSelected]);
  return (
    <div className="card bg-base-100 shadow-lg w-full px-12 py-5">
      <p className="text-2xl font-medium">ช่องทางชำระเงิน</p>

      <div className="w-full flex justify-between items-center pt-6">
        <div className="flex items-center gap-12">
          <div className="w-[55px] h-[55px] bg-[#01427D] rounded-full flex justify-center items-center">
            <Image src={ppLogo} alt={"pp_logo"} width={43} height={27} />
          </div>
          <p className="text-xl">{getPhoneNumberFormat(paymentDetail.ppNumber)}</p>
        </div>
        <div className="flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
            />
          </svg>

          <p>copy</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="w-full h-auto flex gap-6">
        <div className="h-fit">
          {qrPayload !== null ? <QrPayment payload={qrPayload} /> : null}
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-around font-medium">
            <p>จำนวน</p>
            <p>ราคา</p>
            <p>ปลายทาง</p>
          </div>
          <div className="flex flex-col justify-around text-end">
            <p>{priceSelected.month} เดือน</p>
            <p>{priceSelected.price} บาท</p>
            <p>{getPhoneNumberFormat(paymentDetail.ppNumber)}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-auto">
        <p className="py-2">จำนวนเดือนที่ต้องการจ่าย</p>
        <div className="flex justify-between flex-wrap mt-4">
          {paymentDetail.prices.map((e, index) =>
            e.month === priceSelected.month ? (
              <div
                className="w-28 h-10 rounded-lg bg-primary text-xl text-white mb-4 flex justify-center items-center hover:cursor-pointer"
                key={index}
              >
                <p>{e.month}</p>
              </div>
            ) : (
              <div
                className="w-28 h-10 rounded-lg bg-base-200 text-xl mb-4 flex justify-center items-center font-light hover:cursor-pointer"
                key={index}
                onClick={() => setPriceSelected(e)}
              >
                <p>{e.month}</p>
              </div>
            )
          )}
          <div className="w-28 h-10 flex justify-center items-center text-2xl">
            {priceSelected.price} ฿
          </div>
        </div>
      </div>
    </div>
  );
}
