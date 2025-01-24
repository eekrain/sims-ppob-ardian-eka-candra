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
    <div className="relative overflow-hidden rounded-2xl p-6">
      <img
        src={bgSaldo}
        alt="Background Saldo"
        className="absolute left-0 top-0 -z-10 h-full w-full"
      />
      <div className="flex flex-col gap-4 text-white">
        <p>Saldo Anda</p>
        <p className="text-2xl">
          <span>Rp</span> {show ? <span>100.000</span> : <HiddenDigit />}
        </p>

        <button
          onClick={() => setShow((prev) => !prev)}
          className="inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-xs hover:border-white md:text-sm"
        >
          <span>Lihat Saldo</span>
          {show ? (
            <AiOutlineEyeInvisible className="inline size-4" />
          ) : (
            <AiOutlineEye className="inline size-4" />
          )}
        </button>
      </div>
    </div>
  );
};
