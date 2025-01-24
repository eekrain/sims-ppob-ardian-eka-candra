import FormProfile from "@/components/account/FormProfile";
import { useState } from "react";

type Props = {};

const AccountPage = ({}: Props) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <>
      <FormProfile isEditing={isEditing} setEditing={setEditing} />
    </>
  );
};

export default AccountPage;
