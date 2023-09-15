import styled, { css } from "styled-components";

export const CheckboxElemental = styled.input.attrs({type: "checkbox"})``

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

export const LabelText = styled.span`
  ${(props)=>{
    switch (props.$mode) {
      case "dark":
        return css`
          background-color: : black;
          color: white;
          ${CheckboxElemental}:checked + && {
            color: blue;
          }
        `
      default:
        return css`
          background-color: white;
          color: black;
          ${CheckboxElemental}: checked + && {
            color: red;
          }
        `
    }
  }}
`
