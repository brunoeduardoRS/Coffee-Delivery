import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import home from "../../assets/Home.svg";
import { Catalog } from "../../Components/Catalog";

import {
  CharacterDelivery,
  HerosSection,
  HerosSectionContent,
  HomeContaner,
  Menu,
} from "./style";

export function Home() {
  return (
    <>
      <HomeContaner>
        <HerosSection>
          <HerosSectionContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h3>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h3>
          </HerosSectionContent>

          <CharacterDelivery>
            <span>
              <ShoppingCart size={16} weight="fill" />
              Compra simples e segura
            </span>
            <span>
              <Package size={16} weight="fill" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <Timer size={16} weight="fill"></Timer>Entrega rápida e rastreada
            </span>
            <span>
              <Coffee size={16} weight="fill" />O café chega fresquinho até você
            </span>
          </CharacterDelivery>

          <Menu>
            <h1>Nossos cafés</h1>
            <Catalog />
          </Menu>
        </HerosSection>
        <img src={home} />
      </HomeContaner>
    </>
  );
}
