import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";
import { LayoutContaner } from "./style";

export function DefaultLayout() {
  return (
    <LayoutContaner>
      <Header />
      <Outlet />
    </LayoutContaner>
  );
}
