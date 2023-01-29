import { PropsWithChildren } from "react";
import styled from "styled-components";

export const InputText = styled.input`
  width: 100%;
  height: 3.75rem;
  border: 1px solid #cccccc;
  font-size: 1rem;
  padding: 1rem;
  color: #2d2a40;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #cccccc;
  }
  :-ms-input-placeholder {
    color: #cccccc;
  }
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  border: 1px solid #cccccc;
  font-size: 1rem;
  padding: 1rem;
  color: #2d2a40;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #cccccc;
  }
  :-ms-input-placeholder {
    color: #cccccc;
  }
`;


export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })``
export const InputRadioBox = styled.input.attrs({ type: 'radio' })``
