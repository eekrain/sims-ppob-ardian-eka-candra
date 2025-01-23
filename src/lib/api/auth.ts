import { BASE_API_URL } from "../constant";
import { TBaseFetchResult, TLoginSchema, TRegistrationSchema } from "../schema";
import { MyFetch } from "../utils";

const myfetch = new MyFetch(BASE_API_URL);

export const registration = (values: TRegistrationSchema) =>
  myfetch
    .url("/registration")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
    .execute<TBaseFetchResult<null>>();

export const login = (values: TLoginSchema) =>
  myfetch
    .url("/login")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
    .execute<TBaseFetchResult<{ token: string }>>();
