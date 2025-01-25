import bgSaldo from "@/assets/Background Saldo.png";
import { useAppDispatch, useAppSelector } from "@/store";
import { getBalance, toggleBalanceVisibility } from "@/store/transaction";
import { useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const DIGIT = [...Array(7)];

const HiddenDigit = () => (
  <span className="inline-flex items-center gap-2">
    Rp{" "}
    {DIGIT.map((_, i) => (
      <span key={i} className="size-3 rounded-full bg-white" />
    ))}
  </span>
);
type Props = {};

export const SaldoCard = ({}: Props) => {
  const dispatch = useAppDispatch();
  const showBalance = useAppSelector((state) => state.transaction.showBalance);
  const balance = useAppSelector((state) => state.transaction.balance);
  const toggleVisibility = () => dispatch(toggleBalanceVisibility());

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);

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
          {showBalance ? (
            <span>
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(balance)}
            </span>
          ) : (
            <HiddenDigit />
          )}
        </p>

        <button
          onClick={toggleVisibility}
          className="inline-flex w-fit items-center gap-2 border-b border-transparent pb-1 text-xs hover:border-white md:text-sm"
        >
          <span>Lihat Saldo</span>
          {showBalance ? (
            <AiOutlineEyeInvisible className="inline size-4" />
          ) : (
            <AiOutlineEye className="inline size-4" />
          )}
        </button>
      </div>
    </div>
  );
};
