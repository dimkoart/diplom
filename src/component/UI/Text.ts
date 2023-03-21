import styled from 'styled-components'
import colors from '../../constants/colors'

export const StyledText = styled.text`
  display: flex;
  text-align: left;
  margin-bottom: 8px;
  align-self: auto;
  margin-left: 5px;
  margin-top: 5px;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  color: ${colors.textColors};
  text-shadow: 0px 4px 4px ${colors.textShadow};
`
