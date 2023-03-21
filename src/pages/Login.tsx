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

const Login = () => {
  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={colors.red} />
        <Title>Sign In Form</Title>
        <StyledText style={{ alignSelf: 'start', marginTop: 15 }}>
          Email
        </StyledText>
        <Input type='email' placeholder='Enter email' />
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
        <Button text='Sign In' />
      </Form>
    </Container>
  )
}

export default Login
