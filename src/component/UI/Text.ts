import { CSSProperties } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
interface Props {
  alignSelf?: string
  marginTop?: number
  fontSize?: number
  color?: string
  style?: CSSProperties
}

export const StyledText = styled.text<Props>`
  display: flex;
  text-align: left;
  align-self: ${(props) => props.alignSelf || 'auto'};
  margin-bottom: 8px;
  margin-left: 5px;
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + 'px' : 5 + 'px'};
  font-family: 'Poppins';
  font-style: normal;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : 20 + 'px')};
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => props.color || colors.textColors};
  text-shadow: 0px 4px 4px ${colors.textShadow};
`
