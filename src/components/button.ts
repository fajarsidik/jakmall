import styled from "styled-components";
export const ButtonOrange = styled.button`
  width: 100%;
  height: 3.75rem;
  border: 1px solid #FF8A00;
  font-size: 1rem;
  padding: 1rem;
  color: #ffffff;
  background-color: #FF8A00;
  outline: none;  
  box-shadow: 0 5px 10px rgba(255,138,0,0.3);
  cursor: pointer;
  transition:.1s;
  &:active{
    box-shadow:none
  }
`;