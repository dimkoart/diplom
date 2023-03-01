import React, { useEffect } from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import {
  ArrowBack,
  Button,
  ButtonsBlock,
  GoogleAuth,
  GoogleButton,
  LoginInput,
  PasswordInput,
  RegistrationButton,
  SignInForm,
  Wrapper,
} from "./styled/Login.styled.components";
import { redirect, Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <ArrowBack
        onClick={(event) => {
          event.preventDefault();
          navigate("/registration");
        }}
      >
        <GlobalSvgSelector id="arrow" />
      </ArrowBack>
      <Wrapper>
        <SignInForm>
          <h1>Sign In Form</h1>
          <LoginInput type="email" placeholder="email"></LoginInput>
          <PasswordInput type="password" placeholder="password"></PasswordInput>
          <Button onClick={() => {}}>Войти</Button>
          <ButtonsBlock>
            <GoogleAuth>
              Войти через
              <GoogleButton>
                <GlobalSvgSelector id="google" />
              </GoogleButton>
            </GoogleAuth>
            <RegistrationButton
              onClick={(event) => {
                event.preventDefault();
                navigate("/registration");
              }}
            >
              Регистрация
            </RegistrationButton>
          </ButtonsBlock>
        </SignInForm>
      </Wrapper>
    </>
  );
}

export default Login;
