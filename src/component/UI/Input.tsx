import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps {
  style?: CSSProperties
  text?: string
  type?: string | undefined
  value?: string
  placeholder?: string | undefined
}
const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  style,
  value,
  ...props
}) => {
  return <StyledInput style={style} {...props} value={value}></StyledInput>
}

const StyledInput = styled.input`
  display: flex;
  width: 400px;
  height: 49.48px;
  padding-left: 25px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.inputColor};
  border-radius: 15px;
  border: 0;
  box-sizing: border-box;
  filter: drop-shadow(2px 5px 25px ${(props) => props.theme.dropShadow});
  ::placeholder {
    color: ${(props) => props.theme.placeHolder};
    font-size: 20px;
  }
`

export default Input
