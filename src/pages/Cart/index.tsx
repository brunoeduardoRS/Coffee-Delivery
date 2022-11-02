import {
  CartContent,
  ContentFormLegend,
  FormContentAdress,
  ContentInput,
  InputAdress,
  InputCEP,
  InputCity,
  InputComplement,
  InputNumber,
  InputStreet,
  InputUf,
  FormContentPayment,
  ButtonPaymentForm,
  ContentPayment,
} from "./style";
import { CoffeeSelected } from "../../Components/CoffeeSelected/index";
import { Bank, CreditCard, Money } from "phosphor-react";

export function Cart() {
  return (
    <CartContent>
      <h1>Complete seu pedido</h1>
      <CoffeeSelected />
      <FormContentAdress>
        <ContentFormLegend>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </ContentFormLegend>
        <InputCEP placeholder="CEP" type="text" />
        <InputStreet placeholder="Rua" />
        <ContentInput>
          <InputNumber placeholder="Número" type="text" />
          <InputComplement placeholder="Complemento" />
        </ContentInput>
        <ContentInput>
          <InputAdress placeholder="Bairro" />
          <InputCity placeholder="Cidade" />
          <InputUf placeholder="UF" />
        </ContentInput>
      </FormContentAdress>
      <FormContentPayment>
        <h3>Endereço de Entrega</h3>
        <span>Informe o endereço onde deseja receber seu pedido</span>
        <ContentPayment>
          <ButtonPaymentForm>
            <CreditCard size={16} color="#8047F8" />
            Cartão de Crédito
          </ButtonPaymentForm>
          <ButtonPaymentForm>
            <Bank size={16} color="#8047F8" />
            Cartão de Débito
          </ButtonPaymentForm>
          <ButtonPaymentForm>
            <Money size={16} color="#8047F8" />
            Dinheiro
          </ButtonPaymentForm>
        </ContentPayment>
      </FormContentPayment>
    </CartContent>
  );
}
