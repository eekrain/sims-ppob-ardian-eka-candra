import { SaldoCard, Welcome } from "@/components/home";

type Props = {};

const TopupPage = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-4 items-center">
        <Welcome />
        <SaldoCard />
      </div>
    </>
  );
};

export default TopupPage;
