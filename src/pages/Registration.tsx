import React, { FC, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled, { useTheme, withTheme } from 'styled-components'
import { StyledText } from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import Icon from '../component/UI/Icon'
import {
  Container,
  ForgetPasswordBlock,
  Form,
  Title,
} from '../styles/Authentification/AuthentificationComponents'
import {
  UserRegistartion,
  registrationUser,
} from '../store/thunk/registrationUser'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { registartionUserData } from '../store/selectors'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Registration: FC = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const dispatch = useCustomDispatch()
  const { user, response, isLoading } = useCustomSelector(registartionUserData)
  const errNotify = (messagge: string) => {
    toast.error(messagge, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }
  const [userData, setUser] = useState<UserRegistartion>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    if (response.status === 201 && user.token) {
      console.log(userData)
      console.log(user)
      const reg =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
      if (userData.email === '' || userData.password === '') {
        errNotify('введите все данные ')
      } else if (reg.test(userData.email) === false) {
        errNotify('не верный эмайл')
      } else {
        navigate('/userPage')
      }
    }
  }, [isLoading])

  const handleLogin = async () => {
    await dispatch(registrationUser(userData))
  }
  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={theme.red} />
        <ButtonBack
          onClick={() => {
            navigate('/login')
          }}
        >
          <Icon icon='arrow-left2' size={20} color={theme.buttonLoginColor} />
        </ButtonBack>
        <Title>Registration</Title>
        <StyledText>Use o seu melhor email para entrar</StyledText>
        <StyledText style={{ marginTop: 15, alignSelf: 'start' }}>
          Email
        </StyledText>
        <Input
          type='email'
          placeholder='Enter email'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...userData, email: e.target.value })
          }
        />
        <StyledText style={{ marginTop: 15, alignSelf: 'start' }}>
          Firs tName
        </StyledText>
        <Input
          type='text'
          placeholder='First Name'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...userData, firstName: e.target.value })
          }
        />
        <StyledText style={{ marginTop: 15, alignSelf: 'start' }}>
          Last Name
        </StyledText>
        <Input
          type='text'
          placeholder='Last Name'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...userData, lastName: e.target.value })
          }
        />
        <StyledText style={{ marginTop: 25, alignSelf: 'start' }}>
          Password
        </StyledText>
        <Input
          type='password'
          placeholder='Enter Password'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser({ ...userData, password: e.target.value })
          }
        />
        <ForgetPasswordBlock>
          <StyledText
            style={{ marginTop: 5, alignSelf: 'start', fontSize: 15 }}
          >
            Already have an account,
          </StyledText>
          <Link to='/login' style={{ fontSize: 16, textDecoration: 1 }}>
            <StyledText
              style={{ marginTop: 5, fontSize: 15, color: theme.blue }}
            >
              click here
            </StyledText>
          </Link>
        </ForgetPasswordBlock>
        <Button
          text='Registration'
          onClick={async () => {
            await handleLogin()
          }}
        />
      </Form>
      <ToastContainer />
    </Container>
  )
}

const ButtonBack = styled.button`
  position: relative;
  align-self: start;
  align-items: center;
  justify-content: center;
  display: flex;
  top: 43px;
  left: 25px;
  height: 36px;
  width: 36px;
  justify-self: end;
  background-color: ${(props) => props.theme.backButton};
  border-radius: 50%;
  box-shadow: 0 4px 8px ${(props) => props.theme.buttonShadow};
  border: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 5px 25px -3px ${(props) => props.theme.buttonHoverShadow};
  }
`

export default withTheme(Registration)
