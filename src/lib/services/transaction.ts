import {
  TPaymentSchema,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "@/lib/schema";
import { MyFetch, TFetchResult } from "./fetch-wrapper";

const myfetch = new MyFetch(import.meta.env.VITE_BASE_API_URL);

export type TBalance = {
  balance: number;
};

const getBalance = async () =>
  myfetch
    .url("/balance")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBalance>>();

const topupBalance = async (values: TTopupSchema) =>
  myfetch
    .url("/topup")
    .method("POST")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
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

const createPayment = async (values: TPaymentSchema) =>
  myfetch
    .url("/transaction")
    .method("POST")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TCreatePayment>>();

export type TTransactionItem = {
  invoice_number: string;
  transaction_type: "TOPUP" | "PAYMENT";
  description: string;
  total_amount: 10000;
  created_on: string;
};

const getTransactionHistory = async ({
  offset,
  limit,
}: TTransactionHistoryQuery) =>
  myfetch
    .url(`/transaction/history?offset=${offset}&limit=${limit}`)
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list banner")
    .execute<
      TFetchResult<{
        offset: number;
        limit: number;
        records: TTransactionItem[];
      }>
    >();

const TransactionService = {
  getBalance,
  topupBalance,
  createPayment,
  getTransactionHistory,
};
export default TransactionService;
