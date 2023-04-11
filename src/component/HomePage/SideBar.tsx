import React from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import { StyledText } from '../UI/Text'

const SideBar = () => {
  const theme = useTheme()
  return (
    <NavBarFilms>
      <StyledText style={{ fontSize: 23 }}>Navigation</StyledText>
      <hr style={{ margin: '15px 0' }} />
      <StyledText style={{ fontSize: 25, textDecoration: 'underline' }}>
        <Link
          to='/home/films'
          style={{ textDecoration: 'none', color: theme.textColors }}
        >
          Films
        </Link>
      </StyledText>
      <StyledText style={{ fontSize: 25, textDecoration: 'underline' }}>
        <Link
          to='/home/series'
          style={{ textDecoration: 'none', color: theme.textColors }}
        >
          Series
        </Link>
      </StyledText>
      <StyledText style={{ fontSize: 25, textDecoration: 'underline' }}>
        <Link
          to='/home/anime'
          style={{ textDecoration: 'none', color: theme.textColors }}
        >
          Anime
        </Link>
      </StyledText>
    </NavBarFilms>
  )
}
const NavBarFilms = styled.div`
  position: sticky;
  display: inline-flex;
  flex-direction: column;
  top: 0;
  width: 140px;
  height: 300px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
`
export default SideBar
