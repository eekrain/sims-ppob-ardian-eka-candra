import { AuthHeader } from "@/components/auth/AuthHeader";
import FormLogin from "@/components/auth/FormLogin";
import API from "@/lib/api";
import { TLoginSchema } from "@/lib/schema";
import { toast } from "sonner";

type Props = {};

const LoginPage = ({}: Props) => {
  const onSubmit = (values: TLoginSchema) => {
    API.auth
      .login(values)
      .then((val) => {
        console.log("🚀 ~ API.auth.login ~ val:", val);
        toast.success(val.message);
      })
      .catch((err) => {
        console.log("🚀 ~ API.auth.login ~ err:", err);
        toast.error(err.message);
      });
  };

  return (
    <div className="mx-auto max-w-sm">
      <AuthHeader
        description={
          <span>
            Masuk atau buat akun
            <br />
            untuk memulai
          </span>
        }
      />
      <FormLogin onSubmit={onSubmit} />
    </div>
  );
};

export default LoginPage;
