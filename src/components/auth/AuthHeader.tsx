import logo from "@/assets/Logo.png";

type Props = {
  description: JSX.Element;
};

export const AuthHeader = ({ description }: Props) => {
  return (
    <>
      <header className="flex justify-center items-center gap-2">
        <img src={logo} alt="Logo" />
        <span className="text-lg font-medium">
          SIMS PPOB <span className="hidden md:inline">ARDIAN </span>
          <span>EKA</span>
          <span className="hidden md:inline"> CANDRA</span>
        </span>
      </header>

      <p className="mt-6 mb-12 text-center text-2xl font-medium">
        {description}
      </p>
    </>
  );
};
