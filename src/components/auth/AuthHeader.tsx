import logo from "@/assets/logo.png";

type Props = {
  description: JSX.Element;
};

export const AuthHeader = ({ description }: Props) => {
  return (
    <>
      <header className="flex items-center justify-center gap-2">
        <img src={logo} alt="Logo" className="size-10" />
        <span className="text-xl font-semibold">
          SIMS PPOB <span className="hidden md:inline">ARDIAN </span>
          <span>EKA</span>
          <span className="hidden md:inline"> CANDRA</span>
        </span>
      </header>

      <p className="mb-12 mt-6 text-center text-3xl font-medium">
        {description}
      </p>
    </>
  );
};
