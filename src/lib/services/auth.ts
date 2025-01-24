import {
  TLoginSchema,
  TRegistrationSchema,
  TUserProfileSchema,
} from "@/lib/schema";
import { MyFetch, TFetchResult } from "./fetch-wrapper";

const myfetch = new MyFetch(import.meta.env.VITE_BASE_API_URL);

const register = async (values: TRegistrationSchema) =>
  myfetch
    .url("/registration")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
    .execute<TFetchResult<null>>();

const login = async (values: TLoginSchema) =>
  myfetch
    .url("/login")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
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
};

const getProfile = async () =>
  myfetch
    .url("/profile")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching user")
    .execute<TFetchResult<User>>();

const updateProfile = async (values: TUserProfileSchema) =>
  myfetch
    .url("/profile/update")
    .method("PUT")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
    .errorMessage("Gagal upload foto baru")
    .execute<TFetchResult<User>>();

const updateProfilePicture = async (data: FormData) =>
  myfetch
    .url("/profile/image")
    .method("PUT")
    .bearer(localStorage.getItem("accessToken")!)
    .body(data)
    .errorMessage("Gagal upload foto baru")
    .execute<TFetchResult<User>>();

const AuthService = {
  register,
  login,
  getProfile,
  updateProfile,
  updateProfilePicture,
};
export default AuthService;
