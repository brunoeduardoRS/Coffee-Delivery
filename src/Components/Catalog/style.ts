import styled from "styled-components";

export const SectionCatalog = styled.section`
    display:flex;
    flex-direction: column;
`
export const ContentSection = styled.div`
    display: flex;
    gap:2.5rem;
    margin-bottom: 40px;
    :last-child{
        margin-bottom: 7rem;
    }
`
export const CatalogContent = styled.div`
    display: flex;
    width: 256px;
    height: 310px;
    background: ${props=>props.theme["base-card"]};
    border-radius: 6px 32px;
    flex-direction: column;
    align-items: center;

    img{
        position:relative;
        width:7.5rem;
        height: 7.5rem;
        margin-left: 0;
        margin-top: -1.5rem;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 130%;
        margin-top:1rem;
        color:${props=>props.theme["yellow-dark"]};
        width:81px;
        height: 21px;
        background: ${props=>props.theme["yellow-ligth"]};
        border-radius: 80px;
        margin-bottom: 1rem;

    }
    h3{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        color:${props=>props.theme["base-subtitle"]};
        margin-bottom:0.5rem;
    }
    legend{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        width: 216px;
        color:${props=>props.theme["base-label"]};
        margin-bottom:33px;



 }

 label{
    display:flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;   
    font-size: 14px;
    line-height: 130%;
    color: ${props=>props.theme["base-text"]};
    width:67px;
    height: 32px;
    gap:4px;
    

    h3{
    font-family: 'Baloo';
    width: 67px;
    height: 32px;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
    margin:0;
    }
 }

 div{
    display: flex;
 }
 
`
export const GlobalButtonSelector = styled.button`


    color: ${props => props.theme["purple"]};
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border:none;
    font-size: 20px;
    cursor:pointer;

    :hover{
        color:${props=>props.theme["purple-dark"]};
    }

`

export const SelectedItem = styled.div`
margin-left:23px;
width: 72px;
height: 32px;
background:${props=>props.theme["base-button"]};
display:flex;
border-radius:6px;
align-items: center;
justify-content: center;
gap:4px;

span{
    background: none;
    width: 20px;
    height: 21px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color:${props=>props.theme["base-title"]};
}

`

