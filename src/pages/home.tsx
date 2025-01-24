import { PPOBMenu, PromoCarousel, SaldoCard, Welcome } from "@/components/home";
import { PPOB_MENU, PROMO_BANNER } from "@/lib/constant";

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[40%_1fr]">
        <Welcome />
        <SaldoCard />
      </div>
      <PPOBMenu menuList={PPOB_MENU} />
      <PromoCarousel promoList={PROMO_BANNER} />
    </>
  );
};

export default HomePage;
