import { TitlePrincipal } from "./styledComponents/TitlePrincipal"

type TitleProps = {children: string}

export const Title = ({children}:TitleProps) => {
  return(
    <TitlePrincipal>{children}</TitlePrincipal>
  )
}