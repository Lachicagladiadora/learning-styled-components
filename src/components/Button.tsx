import { ButtonElemental } from "./styledComponents/ButtonElemental"

type ButtonProps = {
  children:string,
  onClick: ()=>void,
}

export const Button = ({children, onClick}: ButtonProps) =>{
  return(
    <ButtonElemental
      onClick={onClick}
    >
      {children}
    </ButtonElemental>
  )
}