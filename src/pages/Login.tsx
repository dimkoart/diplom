import styled from 'styled-components'
import Text from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import { Link } from 'react-router-dom'
import '../App.css'
import Icon from '../component/UI/Icon'
import {
  Container,
  Form,
  Title,
} from '../component/UI/Authentiction/AuthenticationComponents'
import colors from '../constants/colors'

const Login = () => {
  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={colors.red} />
        <Title>Sign In Form</Title>
        <Text text='Use o seu melhor email para entrar' />
        <Text text='Email' style={{ alignSelf: 'start', marginTop: 15 }} />
        <Input type='email' placeholder='Enter email' />
        <Text text='Password' style={{ marginTop: 25, alignSelf: 'start' }} />
        <Input type='password' placeholder='Enter Password' />
        <HrefBlock>
          <Text
            text='No account, '
            style={{ marginTop: 5, alignSelf: 'start', fontSize: 15 }}
          />
          <Link to='/registration' style={{ fontSize: 16 }}>
            <Text
              text=' click here '
              style={{
                marginTop: 5,
                fontSize: 15,
                color: colors.purple,
              }}
            />
          </Link>
        </HrefBlock>
        <Button text='Sign In' />
      </Form>
    </Container>
  )
}

const HrefBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`
export default Login
