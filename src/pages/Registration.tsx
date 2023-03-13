import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { StyledText } from '../component/UI/Text'
import Input from '../component/UI/Input'
import Button from '../component/UI/Button'
import colors from '../constants/colors'
import Icon from '../component/UI/Icon'
import {
  Container,
  ForgetPasswordBlock,
  Form,
  Title,
} from '../styles/Authentification/AuthentificationComponents'

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
          <Icon icon='arrow-left2' size={20} color={colors.buttonLoginColor} />
        </ButtonBack>
        <Title>Registration</Title>
        <StyledText>Use o seu melhor email para entrar</StyledText>
        <StyledText alignSelf='start' marginTop={15}>
          Email
        </StyledText>
        <Input type='email' placeholder='Enter email' />
        <StyledText marginTop={25} alignSelf='start'>
          Password
        </StyledText>
        <Input type='password' placeholder='Enter Password' />
        <Input
          type='password'
          style={{ marginTop: 15, marginBottom: 10 }}
          placeholder='Repeat Password'
        />
        <ForgetPasswordBlock>
          <StyledText marginTop={5} alignSelf='start' fontSize={15}>
            Already have an account,
          </StyledText>
          <Link to='/login' style={{ fontSize: 16, textDecoration: 1 }}>
            <StyledText marginTop={5} fontSize={15} color={colors.blue}>
              click here
            </StyledText>
          </Link>
        </ForgetPasswordBlock>
        <Button text='Registration' />
      </Form>
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
  background-color: ${colors.backButton};
  border-radius: 50%;
  box-shadow: 0 4px 8px ${colors.buttonShadow};
  border: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 5px 25px -3px ${colors.buttonHoverShadow};
  }
`

export default Registration
