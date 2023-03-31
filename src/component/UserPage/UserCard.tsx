import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Icon from '../UI/Icon'
import ProfileEdit from './ProfileEdit'
import { StyledText } from '../UI/Text'
import colors from '../../constants/colors'

const UserCard: FC = () => {
  const [modal, setModal] = useState(false)
  const closeModal = (): void => {
    setModal(false)
  }

  return (
    <Header>
      <Image>
        <EditPhotoContainer>
          <Icon
            icon='camera'
            size={25}
            color='black'
            style={{
              position: 'relative',
              marginLeft: 5,
              marginTop: 3,
            }}
          />
          <EditPhotoInput />
        </EditPhotoContainer>
      </Image>
      <UserInfo>
        <StyledText
          style={{
            marginTop: 25,
            fontSize: 32,
            fontWeight: 500,
            marginLeft: 20,
          }}
        >
          Dzmitry Samaseika
        </StyledText>
        <StyledText style={{ marginTop: 25, fontSize: 15, marginLeft: 20 }}>
          Registration date: 30 January 2023
        </StyledText>
      </UserInfo>
      <Button
        text='Edit'
        style={{ marginLeft: 150, marginTop: 17, width: 75, border: 0 }}
        onClick={() => {
          setModal(true)
        }}
      />

      <ProfileEdit active={modal} onClose={closeModal} />
    </Header>
  )
}
const Header = styled.div`
  display: flex;
  margin-top: 60px;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`
const UserInfo = styled.div`
  flex-direction: column;
`
const Image = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  width: 168px;
  height: 168px;
  border-radius: 100px;
  background-image: url('https://lastfm.freetls.fastly.net/i/u/770x0/184fc92686e96c0f0b63e426c233bd59.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`
const EditPhotoContainer = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 90px;
  background-color: ${colors.gray};
  cursor: pointer;
`
const EditPhotoInput = styled.input.attrs(() => ({ type: 'file' }))`
  position: absolute;
  margin-top: 7px;
  left: 11px;
  width: 35px;
  height: 35px;
  opacity: 0;
`
export default UserCard
