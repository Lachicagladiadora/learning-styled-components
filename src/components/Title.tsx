import { TitleElemental } from "./styledComponents/TitleElemental"

type TitleProps = {children: string}

export const Title = ({children}:TitleProps) => {
  return(
    <TitleElemental>{children}</TitleElemental>
  )
}