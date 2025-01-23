import { NavLink } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {};

const NotFoundError = (props: Props) => {
  return (
    <Card className="max-w-lg mx-auto text-center">
      <CardHeader>
        <CardTitle className="text-destructive text-2xl">
          404 Not Found
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          Halaman tujuan yang diminta tidak ditemukan.{" "}
          <NavLink to={"/"} className={"underline"}>
            Klik disini untuk kembali ke Home.
          </NavLink>
        </p>
      </CardContent>
    </Card>
  );
};

export default NotFoundError;
