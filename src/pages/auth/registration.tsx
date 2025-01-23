import { AuthHeader } from "@/components/auth/AuthHeader";
import FormRegistrasi from "@/components/auth/FormRegistrasi";

type Props = {};

const RegistrationPage = (props: Props) => {
  return (
    <div className="max-w-sm mx-auto">
      <AuthHeader
        description={
          <span>
            Lengkapi data untuk
            <br />
            membuat akun
          </span>
        }
      />
      <FormRegistrasi />
    </div>
  );
};

export default RegistrationPage;
