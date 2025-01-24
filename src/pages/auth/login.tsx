import { AuthHeader } from "@/components/auth/AuthHeader";
import FormLogin from "@/components/auth/FormLogin";

type Props = {};

const LoginPage = ({}: Props) => {
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
      <FormLogin />
    </div>
  );
};

export default LoginPage;
