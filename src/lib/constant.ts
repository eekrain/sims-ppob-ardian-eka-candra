export const BASE_API_URL =
  "https://take-home-test-api.nutech-integrasi.com" as const;

export const NAV_LINKS = [
  { title: "Top Up", href: "/topup" },
  { title: "Transaction", href: "/transaction" },
  { title: "Akun", href: "/account" },
];

import logoPBB from "@/assets/menu/PBB.png";
import logoListrik from "@/assets/menu/Listrik.png";
import logoPulsa from "@/assets/menu/Pulsa.png";
import logoPDAM from "@/assets/menu/PDAM.png";
import logoPGN from "@/assets/menu/PGN.png";
import logoTV from "@/assets/menu/Televisi.png";
import logoMusik from "@/assets/menu/Musik.png";
import logoGame from "@/assets/menu/Game.png";
import logoMakanan from "@/assets/menu/Voucher Makanan.png";
import logoKurban from "@/assets/menu/Kurban.png";
import logoZakat from "@/assets/menu/Zakat.png";
import logoPktData from "@/assets/menu/Paket Data.png";

export type TMenu = { title: string; img: string };

export const PPOB_MENU: TMenu[] = [
  { title: "PBB", img: logoPBB },
  { title: "Listrik", img: logoListrik },
  { title: "Pulsa", img: logoPulsa },
  { title: "PDAM", img: logoPDAM },
  { title: "PGN", img: logoPGN },
  { title: "TV Langganan", img: logoTV },
  { title: "Musik", img: logoMusik },
  { title: "Voucher Game", img: logoGame },
  { title: "Voucher Makanan", img: logoMakanan },
  { title: "Kurban", img: logoKurban },
  { title: "Zakat", img: logoZakat },
  { title: "Paket Data", img: logoPktData },
];

import banner1 from "@/assets/banner/Banner 1.png";
import banner2 from "@/assets/banner/Banner 2.png";
import banner3 from "@/assets/banner/Banner 3.png";
import banner4 from "@/assets/banner/Banner 4.png";
import banner5 from "@/assets/banner/Banner 5.png";

export type TBanner = { title: string; img: string };
export const PROMO_BANNER: TBanner[] = [
  { title: "Saldo Gratis", img: banner1 },
  { title: "Diskon Listrik", img: banner2 },
  { title: "Promo Makan", img: banner3 },
  { title: "Cashback 25%", img: banner4 },
  { title: "Buy 1 Get 2", img: banner5 },
];
