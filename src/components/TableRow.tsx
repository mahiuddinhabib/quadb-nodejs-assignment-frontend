import { ITicker } from "@/types";
import Image from "next/image";
import brand1 from "@/assets/wazirx.png";
import brand2 from "@/assets/bitbns.png";
import brand3 from "@/assets/colodax.png";
import brand4 from "@/assets/zebpay.png";
import brand5 from "@/assets/coindcx.png";

const TableRow = ({ ticker, index }: { ticker: ITicker; index: number }) => {
  return (
    <tr className="bg-gray-800">
      <td className="p-3">{index + 1}</td>
      <td className="p-3">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={
              index % 5 === 0
                ? brand1
                : index % 5 === 1
                ? brand2
                : index % 5 === 2
                ? brand3
                : index % 5 === 3
                ? brand4
                : brand5
            }
            alt="wazirX"
            width={0}
            height={0}
            className="rounded-full h-8 w-8  object-cover"
          />
          <p>{ticker?.name}</p>
        </div>
      </td>
      <td className="p-3 font-bold">₹ {ticker?.last}</td>
      <td className="p-3">
        ₹ {ticker?.buy} / ₹ {ticker?.sell}
      </td>
      <td className="p-3 ">
        {(
          ((parseFloat(ticker?.sell) - parseFloat(ticker?.buy)) /
            parseFloat(ticker?.buy)) *
          100
        ).toFixed(2)}
        %
      </td>
      <td className="p-3 ">
        <>
          {parseFloat(ticker?.sell) - parseFloat(ticker?.buy) < 0 ? "▼" : "▲"}
        </>
        {(parseFloat(ticker?.sell) - parseFloat(ticker?.buy)).toFixed(2)}
      </td>
    </tr>
  );
};

export default TableRow;
