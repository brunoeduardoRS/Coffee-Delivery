import {
  BagCart,
  HeaderContent,
  HeaderLocalization,
  MenuHeader,
} from "./style";
import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContent>
      <img src={Logo} />
      <MenuHeader>
        <HeaderLocalization>
          <MapPin weight="fill" size={22}></MapPin>
          <span>Porto Alegre, RS</span>
        </HeaderLocalization>
        <BagCart>
          <ShoppingCart weight="fill" size={22}>
            <button></button>
          </ShoppingCart>
        </BagCart>
      </MenuHeader>
    </HeaderContent>
  );
}
