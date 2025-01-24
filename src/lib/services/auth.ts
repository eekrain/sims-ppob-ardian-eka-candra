import { BASE_API_URL } from "@/lib/constant";
import {
  TBaseFetchResult,
  TLoginSchema,
  TRegistrationSchema,
  TUserProfileSchema,
} from "@/lib/schema";
import { MyFetch } from "./fetch-wrapper";

const register = async (values: TRegistrationSchema) =>
  new MyFetch(BASE_API_URL)
    .url("/registration")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
    .execute<TBaseFetchResult<null>>();

const login = async (values: TLoginSchema) =>
  new MyFetch(BASE_API_URL)
    .url("/login")
    .method("POST")
    .body(values)
    .errorMessage("Gagal registrasi user")
    .execute<TBaseFetchResult<{ token: string }>>()
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
  new MyFetch(BASE_API_URL)
    .url("/profile")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching user")
    .execute<TBaseFetchResult<User>>();

const updateProfile = async (values: TUserProfileSchema) =>
  new MyFetch(BASE_API_URL)
    .url("/profile/update")
    .method("PUT")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
    .errorMessage("Gagal upload foto baru")
    .execute<TBaseFetchResult<User>>();

const updateProfilePicture = async (data: FormData) =>
  new MyFetch(BASE_API_URL)
    .url("/profile/image")
    .method("PUT")
    .bearer(localStorage.getItem("accessToken")!)
    .body(data)
    .errorMessage("Gagal upload foto baru")
    .execute<TBaseFetchResult<User>>();

const AuthService = {
  register,
  login,
  getProfile,
  updateProfile,
  updateProfilePicture,
};
export default AuthService;
