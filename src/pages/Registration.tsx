import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Text from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import colors from '../constants/colors'
import Icon from '../component/UI/Icon'

const Registration = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <RegForm>
        <Icon icon='tv' size={40} color='red' />
        <ButtonBack
          onClick={() => {
            navigate('/login')
          }}
        >
          {<Icon icon='arrow-left2' size={20} color='#f8d145' />}
        </ButtonBack>
        <Title>Registration</Title>
        <Text text='Use o seu melhor email para entrar' />
        <Text text='Email' style={{ alignSelf: 'start', marginTop: 15 }} />
        <Input type='email' placeholder='Enter email' />
        <Text text='Password' style={{ marginTop: 25, alignSelf: 'start' }} />
        <Input type='password' placeholder='Enter Password' />
        <Input
          type='password'
          style={{ marginTop: 15 }}
          placeholder='Repeat Password'
        />
        <HrefBlock>
          <Text
            text='Already have an account, '
            style={{ marginTop: 5, alignSelf: 'start', fontSize: 15 }}
          />
          <Link to='/login' style={{ fontSize: 16 }}>
            <Text
              text=' click here '
              style={{
                marginTop: 5,
                fontSize: 15,
                color: 'purple',
              }}
            />
          </Link>
        </HrefBlock>
        <Button text='Registartion' />
      </RegForm>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 0%, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url('https://yastatic.net/s3/passport-auth-customs/customs/_/4vui26y6.jpg');
`

const RegForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

const Title = styled.div`
  color: ${colors.white};
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`

const ButtonBack = styled.button`
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 36px;
  width: 36px;
  top: 45px;
  right: 220px;
  background-color: ${colors.loginForm};
  border-radius: 50%;
  box-shadow: 0 4px 8px #020202;
  border: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 5px 25px -3px rgba(247, 243, 243, 0.25);
  }
`

const HrefBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`
export default Registration
