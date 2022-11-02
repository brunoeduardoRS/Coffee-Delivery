import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import delivery from "../../assets/imgDelivey.svg";
import {
  Content,
  ContentDelivery,
  DeliveryContent,
  Test,
  TextContent,
  TimerDelivery,
  TypePayment,
} from "./style";

export function Delivery() {
  return (
    <DeliveryContent>
      <TextContent>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TextContent>
      <Content>
        <ContentDelivery>
          <Test>
            <MapPin weight="fill" size={16}></MapPin>
            <span>Entrega em:</span>
          </Test>
          <TimerDelivery>
            <Timer size={16} weight="fill" />
            <span>Previsão de entrega</span>
          </TimerDelivery>
          <TypePayment>
            <CurrencyDollar size={16} weight="fill" />
            <span>Pagamento na entrega</span>
          </TypePayment>
        </ContentDelivery>
        <img src={delivery} />
      </Content>
    </DeliveryContent>
  );
}
