import styled from "styled-components";

export const CartContent = styled.div`
margin-top: 9rem;
margin-left: 2rem;
    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
        color:${props=>props.theme["base-subtitle"]};
        width: 170px;
        height: 23px;
        margin-bottom: 15px;
            }

`
export const FormContentAdress = styled.div`

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px;
gap: 12px;
width: 640px;
height: 372px;
background: ${props=>props.theme["base-card"]};
border-radius: 6px;

`

export const ContentFormLegend = styled.div`
    display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
font-family: 'Roboto';
font-style: normal;
width: 560px;
height: 44px;
margin-bottom: 2rem;

h3{
    width: 530px;
    height: 21px;

    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
}
span{
    width: 530px;
    height: 21px;
    font-size: 14px;
    line-height: 130%;
}
`
export const InputBase = styled.input`
    height:2.625rem;
    border-radius: 4px;
    padding: 12px;
    border: 1px solid ${props =>props.theme["base-button"]};
    background: ${props=>props.theme["base-input"]};
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const InputCEP = styled(InputBase)`
    width:12.5rem;
`

export const InputStreet = styled(InputBase)`
    width:35rem;
`

export const InputNumber = styled(InputBase)`
    width:12.5rem;
`

export const InputComplement = styled(InputBase)`
    width:21.75rem;
`

export const InputAdress = styled(InputBase)`
    width:12.5rem;
`
export const InputCity = styled(InputBase)`
    width:17.25rem;
`
export const InputUf = styled(InputBase)`
    width:3.75rem;
`
export const ContentInput = styled.div`
display:flex;
flex-wrap:wrap;
gap:12px;
`
export const FormContentPayment = styled(FormContentAdress)`
margin-top:12px;
height: 207px;
box-sizing: border-box;
margin-bottom:40px;
h3{
    width: 530px;
    height: 21px;

    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
}
span{
    width: 530px;
    height: 21px;
    font-size: 14px;
    line-height: 130%;
}
`

export const ButtonPaymentForm = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    gap: 12px;
    width: 178.67px;    
    border-radius: 6px;
    height: 51px;
    color:${props=>props.theme["base-text"]};
    background:${props=>props.theme["base-input"]};
    box-sizing: border-box;
    border: 1px solid ${props =>props.theme["base-button"]};
    cursor:pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;

    :hover{
    background:${props=>props.theme["base-hover"]};
        
    }
    :active{
        border: 1px solid ${props=>props.theme["purple"]};
    }
`
export const ContentPayment = styled.div`
margin-top:1rem; 
gap:12px;
display:flex;
flex-wrap:wrap;
`