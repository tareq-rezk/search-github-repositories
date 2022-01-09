import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px 0;
`;

export const MainHeading = styled.h1`
  font-size: 32px;
  align-self: baseline;
  @media only screen and (max-width:768px){
  font-size: 24px;
  margin: auto;
  }
`;

export const SearchHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const GitHubLogo = styled.img`
  width: 180px;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 90%;
  margin: auto;
`;

export const SearchBtn = styled.button`
  position: absolute;
  left: 10px;
  background: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.img`
  height: 16px;
  opacity: 0.7;
`;

export const SearchInput = styled.input`
  height: 28px;
  width: 300px;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.616);
  border-radius: 14px;
  padding-inline-start: 40px;
  &::placeholder {
    color: rgba(128, 128, 128, 0.527);
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: self-start;
  gap: 0 20px;
  @media only screen and (max-width:768px){
    flex-direction:column;
    gap:10px;
    margin:auto;
      }
`;

export const FilterBtn = styled.button`
  backgroung-color: ${(props) =>
    props.primary ? "#207c83c7" : props.warning ? "palevioletred" : "#fff"};

  background: ${(props) => (props.primary ? "#207c83c7" : "transparent")};
  color: ${(props) => (props.primary ? "white" : "#c33e3e")};
  text-decoration: ${(props) => (props.warning ? "underline" : "none")};
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.34s linear;
  cursor: pointer;
  &:hover {
    box-shadow: ${(props) => (props.primary ? "0 5px 8px 1px #207d83f2;" : "")};
  }
`;
export const Warning = styled.h5`
  color: rgba(228, 68, 39, 0.788);
  font-size: 14px;
  font-weight: normal;
  text-decoration: underline;
  display: block;
  margin-top: 10px;
  text-align: center;
  text-transform: Capitalize;
`;
