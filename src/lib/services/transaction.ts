import {
  TPaymentSchema,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "@/lib/schema";
import { myfetch, TFetchResult } from "./fetch-wrapper";

export type TBalance = {
  balance: number;
};

export const getBalance = async () =>
  myfetch
    .get("/balance")
    .errorMessage("Gagal fetching saldo")
    .execute<TFetchResult<TBalance>>();

export const topupBalance = async (values: TTopupSchema) =>
  myfetch
    .post("/topup", values)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBalance>>();

export type TCreatePayment = {
  invoice_number: string;
  service_code: string;
  service_name: string;
  transaction_type: "PAYMENT";
  total_amount: 50000;
  created_on: string;
};

export const createPayment = async (values: TPaymentSchema) =>
  myfetch
    .post("/transaction", values)
    .errorMessage("Gagal melakukan payment")
    .execute<TFetchResult<TCreatePayment>>();

export type TTransactionItem = {
  invoice_number: string;
  transaction_type: "TOPUP" | "PAYMENT";
  description: string;
  total_amount: 10000;
  created_on: string;
};

export const getTransactionHistory = async ({
  offset,
  limit,
}: TTransactionHistoryQuery) =>
  myfetch
    .get(`/transaction/history?offset=${offset}&limit=${limit}`)
    .errorMessage("Gagal fetching histori transaksi")
    .execute<
      TFetchResult<{
        offset: number;
        limit: number;
        records: TTransactionItem[];
      }>
    >();
