import { ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { SelectorCart } from "./style";

export function AddCart() {
  return (
    <NavLink to="/cart" title="Carrinho de Compras">
      <SelectorCart>
        <ShoppingCartSimple
          weight="fill"
          color="#fff"
          size={20}
        ></ShoppingCartSimple>
      </SelectorCart>
    </NavLink>
  );
}
