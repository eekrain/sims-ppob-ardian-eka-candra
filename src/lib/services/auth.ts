import {
  TLoginSchema,
  TRegistrationSchema,
  TUserProfileSchema,
} from "@/lib/schema";
import { myfetch, TFetchResult } from "./fetch-wrapper";

export const register = async (values: TRegistrationSchema) =>
  myfetch
    .post("/registration", values)
    .errorMessage("Gagal registrasi user")
    .execute<TFetchResult<null>>();

export const login = async (values: TLoginSchema) =>
  myfetch
    .post("/login", values)
    .errorMessage("Gagal login user")
    .execute<TFetchResult<{ token: string }>>()
    .then((res) => {
      localStorage.setItem("accessToken", res.data?.token!);
      return res;
    });

export type User = {
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  full_name: string;
};

export const getProfile = async () =>
  myfetch
    .get("/profile")
    .errorMessage("Gagal fetching user")
    .execute<TFetchResult<User>>();

export const updateProfile = async (values: TUserProfileSchema) =>
  myfetch
    .put("/profile/update", values)
    .errorMessage("Gagal update user")
    .execute<TFetchResult<User>>();

export const updateProfilePicture = async (values: FormData) =>
  myfetch
    .put("/profile/image", values)
    .errorMessage("Gagal upload foto baru")
    .execute<TFetchResult<User>>();
