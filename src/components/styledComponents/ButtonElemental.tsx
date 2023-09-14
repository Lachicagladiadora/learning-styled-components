import styled from "styled-components";

export const ButtonElemental = styled.button`
  font-size: 16px; 
  padding: 10px;
  border: solid 1px yellowgreen;
  border-radius: 5px;
  background: transparent;
  color: yellowgreen;
  &:hover{
    border: red;
    color: orange;
    background-color: #ff000040;
  }
`