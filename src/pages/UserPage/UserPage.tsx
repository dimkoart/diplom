import React, { FC, useState } from 'react'
import styled from 'styled-components'
import NawBar from '../../component/UserPage/NawBar'
import colors from '../../constants/colors'
import UserCard from '../../component/UserPage/UserCard'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Favorites'
import Viewed from './Viewed'
import WatchLater from './WatchLater'
import Header from '../../component/header/Header'

const UserPage: FC = () => {
  const [nawBarState, setNawBar] = useState(1)

  const setNawBarValue = (value: number): void => {
    setNawBar(value)
  }
  const getNawBarValue = (): number => {
    return nawBarState
  }

  return (
    <Container id='Container'>
      <Header />
      <UserContent>
        <UserCard />
        <FilmList>
          <NawBar setTab={setNawBarValue} getTab={getNawBarValue} />
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
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

const UserContent = styled.div`
  display: inline-block;
`

export default UserPage
