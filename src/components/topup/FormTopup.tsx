import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { MdOutlineMoney } from "react-icons/md";
type Props = {};

const TOPUP_BTNS = [10000, 20000, 50000, 100000, 250000, 500000];

const FormTopup = ({}: Props) => {
  return (
    <>
      <div className="mt-12">
        <h3 className="">
          Silahkan masukkan
          <br />
          <span className="text-2xl font-semibold">Nominal Top Up</span>
        </h3>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[60%_40%]">
        <div className="flex flex-col gap-y-4">
          <Input icon={<MdOutlineMoney />} />
          <Button variant="destructive" className="hidden md:block" disabled>
            Top Up
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {TOPUP_BTNS.map((item) => (
            <button key={item} className="rounded border border-gray-500 p-2">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(item)}
            </button>
          ))}
        </div>

        <Button variant="destructive" className="mt-4 md:hidden" disabled>
          Top Up
        </Button>
      </div>
    </>
  );
};

export default FormTopup;
