import { CheckboxElemental, Label, LabelText } from "./styledComponents/CheckboxElemental"

type CheckboxProps = {children: string, mode: string}

export const Checkbox = ({children, mode}: CheckboxProps) => {
  return(
    <>
      <Label>
        <CheckboxElemental defaultChecked></CheckboxElemental>
        <LabelText $mode={mode}>{children}</LabelText>
      </Label>
    </>
  )
}