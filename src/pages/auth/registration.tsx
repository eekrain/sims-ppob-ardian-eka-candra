import { AuthHeader, FormRegistrasi } from "@/components/auth";

type Props = {};

const RegistrationPage = ({}: Props) => {
  return (
    <div className="mx-auto max-w-sm">
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
