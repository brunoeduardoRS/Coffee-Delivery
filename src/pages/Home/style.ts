import styled from "styled-components";

export const HomeContaner = styled.div`
display:flex;
margin-top: 12rem;
margin-left: 2rem;
    img{
        width:476px;
        height: 360px;
        margin-left: 40rem;
        position:absolute;
    
    }
`
export const HerosSection = styled.section`
display: flex;
flex-direction: column;
`
export const HerosSectionContent = styled.div`
display: flex;
flex-direction: column ;


h1{
width: 588px;
height: 124px;
font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 130%;
margin-bottom: 16px;
color:${props=>props.theme["base-title"]};
}

h3{
width: 588px;
height: 52px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 130%;
color:${props=>props.theme["base-subtitle"]};
}
`
export const CharacterDelivery = styled.div`
display:flex;
margin-top:66px;
width: 567px;
height: 84px;
flex-wrap: wrap;
gap:40px;


span{
display:flex;
justify-content: center;
gap:6px;
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color:${props=>props.theme["base-text"]};
}

`

export const Menu = styled.div`
display: flex;
margin-top: 6.75rem;
flex-direction: column;

h1{
color:${props=>props.theme["base-subtitle"]};
    font-family: 'Baloo 2';
font-style: normal;
font-weight: 800;
font-size: 32px;
line-height: 130%;
width: 193px;
height: 42px;
margin-bottom: 4rem;
}
`