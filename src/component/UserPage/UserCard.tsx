import React, { useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import Button from '../UI/Button'

import ProfileEdit from './ProfileEdit'
import { StyledText } from '../UI/Text'
import ToggleSwitch from '../header/ToggleSwitch'
interface Props {
  toggleTheme: () => void
  isDarkTheme: string
  firstName: string
  lastName: string
  photo: string
  isLoading: boolean
}
const UserCard = ({
  toggleTheme,
  isDarkTheme,
  firstName,
  lastName,
  photo,
  isLoading,
}: Props) => {
  const [userData, setUser] = useState({
    firstName: '',
    lastName: '',
    photo: '',
  })
  useEffect(() => {
    setUser({ firstName: firstName, lastName: lastName, photo: photo })
  }, [isLoading])
  const [modal, setModal] = useState(false)
  const closeModal = (): void => {
    setModal(false)
  }
  const theme = useTheme()
  return (
    <Header>
      <Image>
        <img
          src={userData.photo}
          style={{ width: 168, height: 168, borderRadius: 100 }}
        />
      </Image>
      <UserInfo>
        <StyledText
          style={{
            marginTop: 25,
            fontSize: 32,
            fontWeight: 500,
            marginLeft: 20,
            color: theme.textColors,
          }}
        >
          {userData.firstName + ' ' + userData.lastName}
        </StyledText>

        <StyledText
          style={{
            marginTop: 25,
            fontSize: 15,
            marginLeft: 20,
            color: theme.textColors,
          }}
        >
          Registration date: 30 January 2023
        </StyledText>
      </UserInfo>

      <Button
        text='Edit'
        style={{
          marginLeft: 110,
          marginTop: 17,
          width: 68,
          border: 0,
          height: 36,
          borderRadius: 32,
        }}
        onClick={() => {
          setModal(true)
        }}
      />
      <ToggleSwitch
        style={{ height: 36, marginTop: 17, marginLeft: 10 }}
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
      />
      <ProfileEdit active={modal} onClose={closeModal} />
    </Header>
  )
}
const Header = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.theme.loginForm};
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
`
const UserInfo = styled.div`
  flex-direction: column;
`
const Image = styled.div`
  display: flex;
  position: relative;
  justify-content: right;
  align-items: end;
  width: 168px;
  height: 168px;
  border-radius: 100px;

  cursor: pointer;
`

export default UserCard
