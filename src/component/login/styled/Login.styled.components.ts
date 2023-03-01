import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 300px;
  height: 310px;
  left: 50%;
  margin-left: -160px;
  top: 40%;
  margin-top: -100px;
  background-color: #2b2e33;
  border-radius: 10px;
  box-shadow: 2px 5px 25px -3px rgba(0, 0, 0, 0.25);
`;

export const SignInForm = styled.form`
  margin-left: 9px;
  margin-top: 15px;
  height: 90px;
  width: 300px;
  border-radius: 8px;
  position: relative;
`;

export const LoginInput = styled.input`
  background: rgb(28, 30, 33);
  box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
  color: rgb(100, 100, 100);
  position: relative;
  display: block;
  width: 280px;
  height: 45px;
  border: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
  &:first-of-type {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-of-type {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  :focus {
    color: rgb(255, 255, 255);
  }
`;

export const PasswordInput = styled(LoginInput)`
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  background: rgb(28, 30, 33);
  box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
  color: rgb(100, 100, 100);
  position: absolute;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border-radius: 18px;
  right: 110px;
  border: 3px solid rgb(52, 56, 61);
  font-size: 15px;
  text-align: center;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleAuth = styled.button`
  padding: 0 0 0 10px;
  box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
  color: rgb(100, 100, 100);
  border-radius: 18px;
  position: relative;
  background-color: rgb(28, 30, 33);
  font-size: 15px;
  top: 60px;
  right: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgb(52, 56, 61);
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
  }
`;

export const GoogleButton = styled.div`
  display: flex;
  position: relative;
  border-radius: 75px;
  width: 35px;
  height: 35px;
  color: #fff;
  margin-left: 5px;
  left: 5px;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
  }
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const RegistrationButton = styled(GoogleAuth)`
  padding: 0 21px 0 17px;
  right: 19px;
`;

export const ArrowBack = styled.div`
  width: 64px;
  height: 64px;
  margin-left: 95%;
  cursor: pointer;
  svg {
    width: 64px;
    height: 64px;
    transform: rotate(180deg);
  }
  svg:hover {
    transform: rotate(540deg);
    transition: all 0.3s ease-in-out 0s;
    box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
    border-radius: 10px;
  }
`;
