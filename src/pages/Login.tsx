import { StyledText } from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import { Link } from 'react-router-dom'
import Icon from '../component/UI/Icon'
import {
  Container,
  ForgetPasswordBlock,
  Form,
  Title,
} from '../styles/Authentification/AuthentificationComponents'
import colors from '../constants/colors'
import { FC } from 'react'
import { useCustomDispatch, useCustomSelector } from '../hooks/store'
import { UserLogin, fetchCurrentUser } from '../store/thunk/fetchCurrentUser'
import { selectCurrentUserData } from '../store/selectors'
const Login: FC = () => {
  const dispatch = useCustomDispatch()
  const { user, response } = useCustomSelector(selectCurrentUserData)
  const log: UserLogin = { login: '2@gmail.com', password: 'samoseyko123' }
  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={colors.red} />
        <Title>Sign In Form</Title>
        <StyledText style={{ alignSelf: 'start', marginTop: 15 }}>
          Email
        </StyledText>
        <Input type='email' placeholder='Enter email' value={user.token} />
        <StyledText style={{ alignSelf: 'start', marginTop: 25 }}>
          Password
        </StyledText>
        <Input
          type='password'
          placeholder='Enter Password'
          style={{ marginBottom: 10 }}
        />
        <ForgetPasswordBlock>
          <StyledText
            style={{ marginTop: 5, alignSelf: 'start', fontSize: 15 }}
          >
            No account,
          </StyledText>
          <Link to='/registration' style={{ fontSize: 16, textDecoration: 1 }}>
            <StyledText
              style={{ marginTop: 5, fontSize: 15, color: colors.blue }}
            >
              click here
            </StyledText>
          </Link>
        </ForgetPasswordBlock>
        <Button
          text='Sign In'
          onClick={() => {
            dispatch(fetchCurrentUser(log))
          }}
        />
      </Form>
    </Container>
  )
}

export default Login
