import React, { useEffect, useRef, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'
import DropDown from './DropDown'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { infoUser } from '../../store/selectors'
import { fetchUserInfo } from '../../store/thunk/fetchUserInfo'

const Header = () => {
  const theme = useTheme()
  const [scrollDirection, setScrollDirection] = useState(0)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  let lastScrollY = 0
  let scrollY = 0
  const { userInfo } = useCustomSelector(infoUser)
  const dispatch = useCustomDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token != '' && token != null) {
      dispatch(fetchUserInfo(token))
    }
    console.log(userInfo)
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
      container.addEventListener('scroll', updateScrollDirection)
    }
    return () => {
      if (container != null) {
        container.removeEventListener('scroll', updateScrollDirection)
      }
    }
  }, [scrollDirection])
  window.addEventListener('click', (e) => {
    if (e.target != menuRef.current) {
      setOpen(false)
    }
  })
  return (
    <HeaderContainer style={{ top: scrollDirection }}>
      <Logo>
        <Icon icon='tv' size={30} color={theme.gray} style={{ zIndex: 1000 }} />
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
          <Links href='/home' style={{ color: theme.white }}>
            Home
          </Links>
        </Item>
        <Item>
          <Links
            href='/userPage'
            style={{
              color: theme.white,
            }}
          >
            Profile
          </Links>
        </Item>
        <Item>
          <Links href='#' style={{ color: theme.white }}>
            About
          </Links>
        </Item>
        <Item>
          <Links
            href='/adminPage'
            style={{
              color: theme.white,
            }}
          >
            AdminPage
          </Links>
        </Item>
      </NavBar>
      <Main
        onClick={() => {
          setOpen(!open)
        }}
      >
        <StyledText
          style={{
            fontSize: 20,
            fontWeight: 500,
            marginRight: 10,
            color: theme.white,
          }}
        >
          {userInfo.curuser.firstName}
        </StyledText>
        <img
          ref={menuRef}
          src={userInfo.curuser.photo}
          style={{
            borderRadius: 90,
            height: 50,
            width: 50,
            cursor: 'pointer',
            marginTop: 4,
          }}
        />
        {open && <DropDown />}
      </Main>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

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
  transition: all 0.5s ease;
`

const Main = styled.div`
  display: flex;
  position: relative;
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
`
const Links = styled.a`
  font-size: 20px;
  padding: 5px 0px;
  margin: 0px 30px;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  transition: all 0.5s ease;
  text-decoration: none;
  @media (max-width: 1280px) {
    padding: 5px 0;
    margin: 0px 20px;
  }
`
const Item = styled.li`
  list-style-type: none;
`

export default Header
