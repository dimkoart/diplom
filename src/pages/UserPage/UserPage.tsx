import React, { FC, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import NawBar from '../../component/UserPage/NawBar'
import UserCard from '../../component/UserPage/UserCard'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Favorites'
import Viewed from './Viewed'
import WatchLater from './WatchLater'
import { Tab } from '../../types/NavBar'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { infoUser } from '../../store/selectors'
import { fetchUserInfo } from '../../store/thunk/fetchUserInfo'
interface Props {
  toggleTheme: () => void
  isDarkTheme: string
}
const UserPage: FC<Props> = ({ toggleTheme, isDarkTheme }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token != '' && token != null) dispatch(fetchUserInfo(token))
    console.log(userInfo.curuser)
  }, [])
  const dispatch = useCustomDispatch()
  const { userInfo, isLoading } = useCustomSelector(infoUser)
  const [nawBarState, setNawBar] = useState(1)
  const theme = useTheme()
  const setNawBarValue = (value: number): void => {
    setNawBar(value)
  }
  const getNawBarValue = (): number => {
    return nawBarState
  }
  const tabs: Tab[] = [
    {
      value: 'Favorites',
      number: 1,
      link: 'favorites',
    },
    {
      value: 'Viewed',
      number: 2,
      link: 'viewed',
    },
    {
      value: 'Watch later',
      number: 3,
      link: 'watchLater',
    },
  ]
  return (
    <Container>
      <UserContent>
        <UserCard
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
          firstName={userInfo.curuser.firstName}
          lastName={userInfo.curuser.lastName}
          photo={userInfo.curuser.photo}
          isLoading={isLoading}
        />
        <FilmList style={{ backgroundColor: theme.loginForm }}>
          <NawBar setTab={setNawBarValue} getTab={getNawBarValue} tabs={tabs} />
          <hr style={{ margin: '15px 0' }} />
          <Routes>
            <Route path='favorites' element={<Favorites />} />
            <Route
              path='viewed'
              element={
                <Viewed
                  getNawBarValue={getNawBarValue}
                  setNawBarValue={setNawBarValue}
                />
              }
            />
            <Route
              path='watchLater'
              element={
                <WatchLater
                  getNawBarValue={getNawBarValue}
                  setNawBarValue={setNawBarValue}
                />
              }
            />
          </Routes>
        </FilmList>
      </UserContent>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: scroll;
  overflow-x: hidden;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: url('https://yastatic.net/s3/passport-auth-customs/customs/_/4vui26y6.jpg');
`

const FilmList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 20px;
  width: 750px;
  scrollbar-width: auto;

  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
`

const UserContent = styled.div`
  display: inline-block;
`

export default UserPage
