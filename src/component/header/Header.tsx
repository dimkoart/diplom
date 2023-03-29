import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(0)
  let lastScrollY: any = null
  let scrollY: any = null

  useEffect(() => {
    const container = document.getElementById('Container')
    if (container != null) {
      lastScrollY = container.scrollTop
    }
    const updateScrollDirection = () => {
      if (container != null) {
        scrollY = container.scrollTop
      }
      const direction = scrollY > lastScrollY ? -70 : 0
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    if (container != null) {
      container.addEventListener('scroll', updateScrollDirection) // add event listener
    }
    return () => {
      if (container != null) {
        container.removeEventListener('scroll', updateScrollDirection) // clean up
      }
    }
  }, [scrollDirection])

  return (
    <HeaderContainer style={{ top: scrollDirection }}>
      <Logo>
        <Icon
          icon='tv'
          size={30}
          color={colors.gray}
          style={{ zIndex: 1000 }}
        />
        <img
          style={{
            zIndex: 1000,
            width: 155,
            marginLeft: 10,
          }}
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Kinopoisk_colored_logo_%282021-present%29.svg/2560px-Kinopoisk_colored_logo_%282021-present%29.svg.png'
        />
      </Logo>
      <NavBar>
        <Item>
          <Links href='#' style={{ color: 'yellow' }}>
            Home
          </Links>
        </Item>
        <Item>
          <Links href='#'>Profile</Links>
        </Item>
        <Item>
          <Links href='#'>Home</Links>
        </Item>
        <Item>
          <Links href='#'>Home</Links>
        </Item>
        <Item>
          <Links href='#'>About</Links>
        </Item>
      </NavBar>
      <Main>
        <Icon
          icon='menu'
          size={30}
          color={colors.gray}
          style={{ zIndex: 1000, marginLeft: 35, cursor: 'pointer' }}
        />

        <StyledText style={{ fontSize: 20, fontWeight: 500, marginRight: 10 }}>
          Dima
        </StyledText>
        <img
          src='https://lastfm.freetls.fastly.net/i/u/770x0/184fc92686e96c0f0b63e426c233bd59.jpg'
          style={{
            borderRadius: 90,
            height: 50,
            cursor: 'pointer',
          }}
        />
      </Main>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.595) 6.67%,
    rgba(0, 0, 0, 0.579) 13.33%,
    rgba(0, 0, 0, 0.551) 20%,
    rgba(0, 0, 0, 0.512) 26.67%,
    rgba(0, 0, 0, 0.461) 33.33%,
    rgba(0, 0, 0, 0.401) 40%,
    rgba(0, 0, 0, 0.334) 46.67%,
    rgba(0, 0, 0, 0.266) 53.33%,
    rgba(0, 0, 0, 0.199) 60%,
    rgba(0, 0, 0, 0.139) 66.67%,
    rgba(0, 0, 0, 0.088) 73.33%,
    rgba(0, 0, 0, 0.049) 80%,
    rgba(0, 0, 0, 0.021) 86.67%,
    rgba(0, 0, 0, 0.005) 93.33%,
    transparent
  );
  padding: 15px 12%;

  transition: all 0.5s ease;
  @media (max-width: 1280px) {
    padding: 15px 2%;
    transition: 0.2s;
  }
`

const Main = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
`
const NavBar = styled.div`
  display: flex;
  &:hover {
    color: green;
  }
  :active {
    color: yellow;
  }
`
const Links = styled.a`
  color: white;
  font-size: 20px;
  padding: 5px 0px;
  margin: 0px 30px;
  font-weight: 500;
  transition: all 0.5s ease;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
  @media (max-width: 1280px) {
    padding: 5px 0;
    margin: 0px 20px;
  }
`
const Item = styled.li`
  list-style-type: none;
`
export default Header
