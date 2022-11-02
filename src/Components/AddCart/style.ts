import styled from "styled-components";

export const SelectorCart = styled.button`
margin-left: 8px;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: 6px;
background: ${props=>props.theme["purple-dark"]};
border:none;
cursor:pointer;

:hover{
    background:${props=>props.theme["purple"]};
}
`