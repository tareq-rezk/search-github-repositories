import styled from "styled-components";

export const Container = styled.div`
position: relative;
border: 1px solid #8788892e;
border-radius: 5px;
padding: 5px 10px;
width: 200px;
`;
export const Button = styled.button`
padding: 0;
border: 0;
background: transparent;
cursor: pointer;
outline: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
export const Span = styled.span`
font-size: 16px;
font-style: italic;
color: #57606a;
`;

export const DropDownIcon = styled.img`
opacity: 0.6;
width: 16px;
`;
export const DropDownWraper = styled.div`
position: absolute;
background-color: #fff;
top: 100%;
left: 0;
width: 100%;
z-index: 2;
border: 1px solid rgba(0, 0, 0, 0.04);
box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;
export const Menu = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`;

export const Item = styled.li`
padding: 8px 12px;
color: #57606a;
&:hover {
  background-color: rgba(0, 0, 0, 0.14);
  cursor: pointer;
}
`;

