import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 2.25rem;
  color: #ff8a00;
  position: relative;
  z-index: 1;
  &:before {
    content: "";
    border-bottom: 8px solid #eeeeee;
    position: absolute;
    bottom: 0;
    left:0;
    width: 150%;
    z-index: -1;
  }

  &.short{
    &:before{
      width: 100%;
    }
  }
`;


export const Heading2 = styled.h2`
  font-size: 1.5rem;
  color: #ff8a00;  
`;