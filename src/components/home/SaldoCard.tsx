import bgSaldo from "@/assets/Background Saldo.png";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const DIGIT = [...Array(7)];

const HiddenDigit = () => (
  <div className="inline-flex gap-2">
    {DIGIT.map((_, i) => (
      <div key={i} className="size-3 rounded-full bg-white" />
    ))}
  </div>
);
type Props = {};

export const SaldoCard = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative p-6 rounded-2xl overflow-hidden">
      <img
        src={bgSaldo}
        alt="Background Saldo"
        className="w-full h-full absolute left-0 top-0 -z-10"
      />
      <div className="flex flex-col gap-4 text-white">
        <p>Saldo Anda</p>
        <p className="text-2xl">
          <span>Rp</span> {show ? <span>100.000</span> : <HiddenDigit />}
        </p>

        <button
          onClick={() => setShow((prev) => !prev)}
          className="w-fit text-xs md:text-sm inline-flex items-center gap-2 pb-1 border-b border-transparent hover:border-white "
        >
          <span>Lihat Saldo</span>
          {show ? (
            <AiOutlineEyeInvisible className="size-4 inline" />
          ) : (
            <AiOutlineEye className="size-4 inline" />
          )}
        </button>
      </div>
    </div>
  );
};
