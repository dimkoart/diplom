import React from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'

const DropDown = () => {
  const theme = useTheme()
  return (
    <DropDownStyled>
      <Link to='/userPage' style={{ textDecoration: 'none' }}>
        <StyledText
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: theme.white,
          }}
        >
          <Icon
            icon='home'
            size={20}
            color={theme.white}
            style={{ cursor: 'pointer', marginRight: 5 }}
          />
          Page
        </StyledText>
      </Link>
      <Link
        to='/login'
        style={{ textDecoration: 'none' }}
        onClick={() => localStorage.removeItem('token')}
      >
        <StyledText
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
            color: theme.white,
          }}
        >
          <Icon
            icon='switch'
            size={20}
            color={theme.white}
            style={{ cursor: 'pointer', marginRight: 5 }}
          />
          LogOut
        </StyledText>
      </Link>
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
  background-color: ${(props) => props.theme.gray};
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
