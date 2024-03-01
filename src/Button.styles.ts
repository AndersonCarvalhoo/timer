import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'
interface ButtonContainerProps {
  variant: ButtonVariant
}
const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: none;
  margin: 8px;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  background-color: ${(props) => props.theme['green-500']};
  //${(props) => `background-color: ${buttonVariants[props.variant]}`}
`
