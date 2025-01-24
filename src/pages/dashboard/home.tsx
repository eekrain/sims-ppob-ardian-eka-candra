import {
  PPOBMenu,
  BannerCarousel,
  SaldoCard,
  Welcome,
} from "@/components/home";

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[40%_1fr]">
        <Welcome />
        <SaldoCard />
      </div>
      <PPOBMenu />
      <BannerCarousel />
    </>
  );
};

export default HomePage;
