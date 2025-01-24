import { SaldoCard, Welcome } from "@/components/home";
import FormTopup from "@/components/topup/FormTopup";

type Props = {};

const TopupPage = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[40%_1fr]">
        <Welcome />
        <SaldoCard />
      </div>

      <FormTopup />
    </>
  );
};

export default TopupPage;
