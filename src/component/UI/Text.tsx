import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
interface Props {
  text?: string
  style?: object
}
const Text = ({ text, style, ...props }: Props) => {
  return (
    <StyledText {...props} style={style}>
      {text}
    </StyledText>
  )
}

const StyledText = styled.text`
  display: flex;
  text-align: left;
  margin-bottom: 8px;
  margin-left: 5px;
  margin-top: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: 18px;
  color: ${(props) => props.color || colors.textColors};
  text-shadow: 0px 4px 4px ${colors.textShadow};
`
export default Text
