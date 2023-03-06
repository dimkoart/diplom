import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Text from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import colors from '../constants/colors'
import Icon from '../component/UI/Icon'
import {
  Container,
  Form,
  Title,
} from '../component/UI/Authentiction/AuthenticationComponents'

const Registration = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Form>
        <Icon icon='tv' size={40} color={colors.red} />
        <ButtonBack
          onClick={() => {
            navigate('/login')
          }}
        >
          {
            <Icon
              icon='arrow-left2'
              size={20}
              color={colors.buttonLoginColor}
            />
          }
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
                color: colors.purple,
              }}
            />
          </Link>
        </HrefBlock>
        <Button text='Registartion' />
      </Form>
    </Container>
  )
}

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
  box-shadow: 0 4px 8px ${colors.buttonShadow};
  border: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 5px 25px -3px ${colors.buttonHoverShadow};
  }
`

const HrefBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`
export default Registration
