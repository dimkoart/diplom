import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Input from '../UI/Input'
import { StyledText } from '../UI/Text'
import UserCard, { User } from './UserCard'

const UsersList = () => {
  const users: User[] = [
    { name: 'Dima Samseika', status: 'UnBunned', subscription: 'Yes' },
    { name: 'Arseniy Krvzhul', status: 'Bunned', subscription: 'No' },
  ]
  return (
    <UsersContainer>
      <StyledText style={{ fontSize: 30 }}>Enter User Name</StyledText>
      <Input placeholder='userName' />
      {users.map((user) => (
        <UserCard key={user.name} user={user}></UserCard>
      ))}
    </UsersContainer>
  )
}

const UsersContainer = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  width: 1560px;
  height: 720px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

export default UsersList
