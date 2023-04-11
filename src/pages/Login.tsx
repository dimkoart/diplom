import { StyledText } from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../component/UI/Icon'
import {
  Container,
  ForgetPasswordBlock,
  Form,
  Title,
} from '../styles/Authentification/AuthentificationComponents'
import { FC, useEffect, useState } from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { UserLogin, fetchCurrentUser } from '../store/thunk/fetchCurrentUser'
import { selectCurrentUserData } from '../store/selectors'
import { useTheme } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login: FC = () => {
  const dispatch = useCustomDispatch()
  const navigate = useNavigate()
  const { user, response, isLoading } = useCustomSelector(selectCurrentUserData)

  const handleSubmit = async () => {
    const reg =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    if (userData.login === '' || userData.password === '') {
      errNotify('введите все данные ')
    } else if (reg.test(userData.login) === false) {
      errNotify('не верный эмайл')
    } else {
      await dispatch(fetchCurrentUser(userData))
    }
    console.log(user)
  }
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

  const theme = useTheme()
  const [userData, setUserData] = useState<UserLogin>({
    login: '',
    password: '',
  })
  useEffect(() => {
    if (response.status === 201) {
      console.log(userData)
      console.log(user)
      navigate('/userPage')
    }
  }, [response.status])

  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={theme.red} />
        <Title>Sign In Form</Title>
        <StyledText style={{ alignSelf: 'start', marginTop: 15 }}>
          Email
        </StyledText>
        <Input
          type='email'
          placeholder='Enter email'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, login: e.target.value })
          }
          value={userData.login}
        />
        <Input
          type='text'
          placeholder='E'
          style={{ backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, login: e.target.value })
          }
          value={user.token}
        />
        <StyledText style={{ alignSelf: 'start', marginTop: 25 }}>
          Password
        </StyledText>
        <Input
          type='password'
          placeholder='Enter Password'
          style={{ marginBottom: 10, backgroundColor: theme.gray }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUserData({ ...userData, password: e.target.value })
          }
          value={userData.password}
        />
        <ForgetPasswordBlock>
          <StyledText
            style={{ marginTop: 5, alignSelf: 'start', fontSize: 15 }}
          >
            No account,
          </StyledText>
          <Link to='/registration' style={{ fontSize: 16, textDecoration: 1 }}>
            <StyledText
              style={{ marginTop: 5, fontSize: 15, color: theme.blue }}
            >
              click here
            </StyledText>
          </Link>
        </ForgetPasswordBlock>
        <Button
          text='Sign In'
          onClick={async () => {
            await handleSubmit()
          }}
        />
      </Form>
      <ToastContainer />
    </Container>
  )
}

export default Login
