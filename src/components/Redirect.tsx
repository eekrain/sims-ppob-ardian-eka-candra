import { useEffect } from "react";
import { useNavigate } from "react-router";

type Props = { to: string };

const Redirect = ({ to }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);
  return null;
};

export default Redirect;
