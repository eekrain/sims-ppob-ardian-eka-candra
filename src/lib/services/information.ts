import { MyFetch, TFetchResult } from "./fetch-wrapper";

const myfetch = new MyFetch(import.meta.env.VITE_BASE_API_URL);

export type TBanner = {
  banner_name: string;
  banner_image: string;
  description: string;
};
const getAllBanner = async () =>
  myfetch
    .url("/banner")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBanner[]>>();

export type TService = {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
};
const getAllServices = async () =>
  myfetch
    .url("/services")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list service")
    .execute<TFetchResult<TService[]>>();

const InformationService = { getAllBanner, getAllServices };
export default InformationService;
