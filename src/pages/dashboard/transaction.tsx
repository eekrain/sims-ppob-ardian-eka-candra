import { SaldoCard, Welcome } from "@/components/home";
import TransactionList from "@/components/transaction/TransactionList";

type Props = {};

const TransactionPage = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[40%_1fr]">
        <Welcome />
        <SaldoCard />
      </div>

      <TransactionList />
    </>
  );
};

export default TransactionPage;
