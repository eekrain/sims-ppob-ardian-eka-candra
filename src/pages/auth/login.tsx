import { AuthHeader, FormLogin } from "@/components/auth";

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
