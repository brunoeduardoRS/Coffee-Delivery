import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Delivery } from "./pages/Delivery";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
}
