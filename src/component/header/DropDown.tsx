import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'

const DropDown = () => {
  return (
    <DropDownStyled>
      <Link to='/userPage' style={{ textDecoration: 'none' }}>
        <StyledText style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          <Icon
            icon='home'
            size={20}
            color={colors.white}
            style={{ cursor: 'pointer', marginRight: 5 }}
          />
          Page
        </StyledText>
      </Link>
      <StyledText style={{ textDecoration: 'underline', cursor: 'pointer' }}>
        <Icon
          icon='switch'
          size={20}
          color={colors.white}
          style={{ cursor: 'pointer', marginRight: 5 }}
        />
        LogOut
      </StyledText>
    </DropDownStyled>
  )
}
const DropDownStyled = styled.div`
  display: inline-block;
  position: absolute;
  top: 55px;
  right: 0px;
  width: 250px;
  border-radius: 10px;
  background-color: ${colors.gray};
  padding: 10px;
  transition: 0.3s;
  animation: 0.4s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export default DropDown
