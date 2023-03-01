import React from "react";
import { useNavigate } from "react-router-dom";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import { GoogleButton } from "../login/styled/Login.styled.components";
import {
  ArrowBack,
  ButtonsBlock,
  ConfirmPassword,
  GoogleAuthRegistration,
  Password,
  RegistrationButton,
  RegistrationForm,
  RegistrationInput,
  RegistrationWrapper,
} from "./styled/Registration.styled.component";

function Registration() {
  const navigate = useNavigate();
  return (
    <>
      <ArrowBack
        onClick={(event) => {
          event.preventDefault();
          navigate("/login");
        }}
      >
        <GlobalSvgSelector id="arrow" />
      </ArrowBack>

      <RegistrationWrapper>
        <RegistrationForm action="">
          <h1>Registration </h1>
          <RegistrationInput
            type="email"
            placeholder="email"
          ></RegistrationInput>
          <Password type="password" placeholder="password"></Password>
          <ConfirmPassword
            type="password"
            placeholder="confirm password"
          ></ConfirmPassword>
          <RegistrationButton>Регистрация</RegistrationButton>
          <ButtonsBlock>
            <GoogleAuthRegistration>
              Войти через
              <GoogleButton>
                <GlobalSvgSelector id="google" />
              </GoogleButton>
            </GoogleAuthRegistration>
          </ButtonsBlock>
        </RegistrationForm>
      </RegistrationWrapper>
    </>
  );
}

export default Registration;
