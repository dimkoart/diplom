import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import NewButton from '../component/UI/Button'
import Input from '../component/UI/Input'
import colors from '../constants/colors'

function Registration() {
  const navigate = useNavigate()
  return (
    <Container>
      <ArrowBack
        onClick={() => {
          navigate('/login')
        }}
        src='https://cdn0.iconfinder.com/data/icons/web-seo-and-advertising-media-1/512/218_Arrow_Arrows_Back-512.png'
      />
      <Form>
        <Title>Registration</Title>
        <Input type='email' placeholder='email' />
        <Input type='password' placeholder='password' />
        <Input type='password' placeholder='confirm password' />
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
      </Form>
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
  position: relative;
`

const ArrowBack = styled.img`
  width: 64px;
  height: 64px;
  position: absolute;
  cursor: pointer;
  top: 20px;
  left: 20px;
  :hover {
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
    border-radius: 10px;
  }
`

const Form = styled.div`
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

export default Registration
