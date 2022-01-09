import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 10px 15px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  outline: none;
  transition: all 0.43s linear;
  height: 200px;
  justify-content: space-between;
  &:hover {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  max-height: 100px;
  overflow: hidden;
`;
export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 20px;
`;
export const SortingCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;
`;
export const Svg = styled.svg`
  fill: #57606a;
`;
