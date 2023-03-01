import styled from "styled-components";

import {
  Button,
  GoogleAuth,
  LoginInput,
  PasswordInput,
  Wrapper,
} from "../../login/styled/Login.styled.components";

export const RegistrationWrapper = styled(Wrapper)`
  height: 350px;
`;

export const RegistrationForm = styled.form`
  margin-left: 9px;
  margin-top: 15px;
  height: 90px;
  width: 300px;
  border-radius: 8px;
  position: relative;
`;

export const RegistrationInput = styled(LoginInput)``;

export const Password = styled(PasswordInput)``;

export const ConfirmPassword = styled(Password)`
  top: -5px;
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RegistrationButton = styled(Button)`
  margin-top: 10px;
  left: 67px;
  padding: 0;
  width: 147px;
  height: 41px;
`;

export const GoogleAuthRegistration = styled(GoogleAuth)`
  margin-left: 65px;
  right: -2px;
`;

export const ArrowBack = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  cursor: pointer;
  svg {
    width: 64px;
    height: 64px;
  }
  svg:hover {
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
    border-radius: 10px;
  }
`;
