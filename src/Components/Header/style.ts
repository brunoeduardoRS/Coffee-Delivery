import styled from "styled-components";

export const HeaderContent = styled.header`
    display: flex;
    height: 104px;
    padding: 32px 32px;
    width: 100vw;
    max-width: 1420px;
    box-sizing: border-box;
    gap:820px;
    background: ${props=>props.theme["background"]};
    img{
        width: 84.95px;
        height: 40px;
    }
`
export const MenuHeader= styled.div`
display:flex;
gap:12px`

export const HeaderLocalization = styled.div`
 display: flex;
 gap:4px;
 width: 143px;
 height: 38px;
 background-color: ${props=> props.theme["purple-ligth"]};
 align-items: center;
 border-radius: 6px;
 padding: 8px;
 box-sizing: border-box;
 color:${props => props.theme["purple-dark"]};


span{
 font-style: normal;
 font-weight: 400;
 font-size: 14px;
 line-height: 130%;
 height: 18px;
 }

`

export const BagCart = styled.div`
display:flex;
align-items: center;
 color:${props => props.theme["yellow-dark"]};
justify-content: center;
 gap: 4px;
width: 38px;
height: 38px;
background: ${props=>props.theme["yellow-ligth"]};
border-radius: 6px;
`