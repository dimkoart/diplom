import React, { FC, useState } from 'react'
import styled, { useTheme } from 'styled-components'

import Button from '../UI/Button'
import Input from '../UI/Input'
import { StyledText } from '../UI/Text'
import Icon from '../UI/Icon'
import { UserService } from '../../services/UserInfo/UserInfo'
interface Props {
  active: boolean
  onClose: () => void
}
const EditWindow: FC<Props> = ({ active, onClose }) => {
  const theme = useTheme()

  const [file, setFile] = useState()
  const handleChange = (event: any) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }
  const editPhoto = async () => {
    console.log(file)
    const token = localStorage.getItem('token')
    if (token != '' && token != null) {
      const response = await UserService.updateUser(token, file)
      console.log(response)
    }
  }
  if (!active) {
    return null
  }
  return (
    <Blur
      onClick={() => {
        onClose()
      }}
    >
      <Form
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <CloseWIndow
          style={{ alignSelf: 'end', cursor: 'pointer' }}
          onClick={() => {
            onClose()
          }}
        >
          <Icon icon='cross' size={25} color={`${theme.buttonLoginColor}`} />
        </CloseWIndow>

        <Title>Edit Form</Title>
        <StyledText style={{ marginTop: 5, alignSelf: 'start', fontSize: 25 }}>
          Name
        </StyledText>
        <Input type='text' placeholder='Enter Name' />
        <StyledText style={{ marginTop: 25, alignSelf: 'start', fontSize: 25 }}>
          Surname
        </StyledText>
        <Input
          type='text'
          placeholder='Enter Surname'
          style={{ marginBottom: 10 }}
        />
        <label
          style={{
            width: 400,
            height: 50,
            borderRadius: 16,
            display: 'inline-block',
            cursor: 'pointer',
            backgroundColor: 'gray',
          }}
        >
          <StyledText
            style={{
              color: theme.placeHolder,
              marginLeft: 100,
              marginTop: 15,
            }}
          >
            Добавить файл
            {
              <Icon
                icon='box-add'
                size={25}
                color={theme.black}
                style={{ marginLeft: 5 }}
              />
            }
          </StyledText>

          <Input
            style={{
              opacity: 0,
              position: 'relative',
              outline: 0,
              top: -10,
              pointerEvents: 'none',
              userSelect: 'none',
              height: 20,
            }}
            type='file'
            onChange={handleChange}
          />
        </label>
        <Button
          text='Submit'
          style={{ width: 150, height: 50, marginTop: 15, fontWeight: 900 }}
          onClick={async () => {
            await editPhoto()
          }}
        />
      </Form>
    </Blur>
  )
}
const Form = styled.form`
  display: flex;
  position: fixed;
  align-self: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px black;
  animation: 0.5s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
const Blur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`
const Title = styled.div`
  color: ${(props) => props.color || props.theme.textColors};
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`
const CloseWIndow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: rotate(540deg);
    transition: all 0.7s ease-in-out 0s;
    cursor: pointer;
  }
`
export default EditWindow
