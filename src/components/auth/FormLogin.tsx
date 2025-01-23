import { Input } from "../ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { GrLock } from "react-icons/gr";
import { Button } from "../ui/button";

type Props = {};

const FormLogin = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Input
          placeholderIcon={<MdAlternateEmail />}
          placeholder="masukkan email anda"
        />
      </div>

      <div>
        <Input
          placeholderIcon={<GrLock />}
          placeholder="masukkan password anda"
          type="password"
        />
      </div>

      <Button variant={"destructive"} className="mt-6">
        Registrasi
      </Button>

      <p className="text-sm text-center">
        belum punya akun? registrasi{" "}
        <a href="/auth/registration" className="text-red-600 font-semibold">
          di sini
        </a>
      </p>
    </div>
  );
};

export default FormLogin;
