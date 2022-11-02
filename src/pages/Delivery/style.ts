import styled from "styled-components";

export const DeliveryContent = styled.div`
margin-top: 12rem;
display:flex;
justify-content: center;
margin-left: 2rem;
flex-direction: column;
`
export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        color: ${props=>props.theme["yellow-dark"]};
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
    }
    span{
        color:${props=>props.theme["base-subtitle"]};
        font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
font-stretch: 100;
    }
`
export const Content  = styled.div`
display:flex;
gap: 102px;
img{
    margin-top: 35px;
}
`
export const ContentDelivery = styled.div`
margin-top: 40px;
width:526px;
height:270px;
border-radius: 6px 36px;
border: 1px solid;
background: transparent;
border-color: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
padding: 40px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 32px;


`
export const Test = styled.div`
    display: flex;
`
export const TimerDelivery = styled.div``
export const TypePayment = styled.div``