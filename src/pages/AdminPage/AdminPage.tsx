import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import styled from 'styled-components'

import NawBar from '../../component/UserPage/NawBar'

import { Tab } from '../../types/NavBar'
import FilmForm from './FilmForm'
import Films from './Films'
import Users from './Users'

const AdminPage = () => {
  const [nawBarState, setNawBar] = useState(1)

  const setNawBarValue = (value: number): void => {
    setNawBar(value)
  }
  const getNawBarValue = (): number => {
    return nawBarState
  }
  const tabs: Tab[] = [
    {
      value: 'Users',
      number: 1,
      link: 'users',
    },
    {
      value: 'FIlmForm',
      number: 3,
      link: 'filmForm',
    },
    {
      value: 'FIlms',
      number: 2,
      link: 'films',
    },
  ]

  return (
    <Container>
      <Content>
        <NawBar getTab={getNawBarValue} setTab={setNawBarValue} tabs={tabs} />
        <Routes>
          <Route path='users' element={<Users />} />
          <Route
            path='filmForm'
            element={
              <FilmForm
                getNawBarValue={getNawBarValue}
                setNawBarValue={setNawBarValue}
              />
            }
          />
          <Route
            path='films'
            element={
              <Films
                getNawBarValue={getNawBarValue}
                setNawBarValue={setNawBarValue}
              />
            }
          />
        </Routes>
      </Content>
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
const Content = styled.div`
  display: inline-block;
  margin-top: 60px;
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
  width: 1600px;
  height: 850px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
`

export default AdminPage
