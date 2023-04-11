import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text?: string
  style?: CSSProperties
}

const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
  style,
  ...props
}) => {
  return (
    <StyledButton style={style} {...props}>
      {text}
    </StyledButton>
  )
}
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 238px;
  margin-top: 43px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${(props) => props.theme.buttonText};
  background: ${(props) => props.theme.buttonLoginColor};
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.buttonLoginHoverColor};
  }
`

export default Button
