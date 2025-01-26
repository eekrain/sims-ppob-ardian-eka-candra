import { myfetch, TFetchResult } from "./fetch-wrapper";

export type TBanner = {
  banner_name: string;
  banner_image: string;
  description: string;
};
export const getAllBanner = async () =>
  myfetch
    .GET("/banner")
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBanner[]>>();

export type TService = {
  service_code: string;
  service_name: string;
  service_icon: string;
  service_tariff: number;
};
export const getAllServices = async () =>
  myfetch
    .GET("/services")
    .errorMessage("Gagal fetching list service")
    .execute<TFetchResult<TService[]>>();
