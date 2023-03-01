import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import NewButton from '../component/UI/Button'
import Input from '../component/UI/Input'
import colors from '../constants/colors'

const Login: FC<any> = (props) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Wrapper>
        <Title>Sign In Form</Title>
        <Input
          type='email'
          placeholder='email'
          style={{
            backgroundColor: 'white',
            marginBottom: 10,
          }}
        />
        <Input
          type='password'
          placeholder='password'
          style={{ backgroundColor: 'white' }}
        />
        <NewButton icon={false} text='Войти' style={{}} />
        <ButtonsBlock>
          <NewButton icon={true} text='Войти через' style={{}} />
          <NewButton
            onClick={() => {
              navigate('/registration')
            }}
            icon={false}
            text='Регистрация'
            style={{}}
          />
        </ButtonsBlock>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  background-color: ${colors.login + '33'};
  border-radius: 10px;
  box-shadow: 2px 5px 25px -3px rgba(0, 0, 0, 0.25);
`

const Title = styled.div`
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`

const ButtonsBlock = styled.div`
  display: flex;
`

export default Login
