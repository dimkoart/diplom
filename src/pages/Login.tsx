import styled from "styled-components";
import colors from "../constants/colors";
import Text from "../component/UI/Text";
import Input from "../component/UI/Input";
import Button from "../component/UI/Button";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import Icon from "../component/UI/Icon";

const Login = () => {
  return (
    <Container>
      <LoginForm>
        <Icon icon="tv" size={40} color="red" />
        <Title>Sign In Form</Title>
        <Text text="Use o seu melhor email para entrar" />
        <Text text="Email" style={{ alignSelf: "start", marginTop: 15 }} />
        <Input type="email" placeholder="Enter email" />
        <Text text="Password" style={{ marginTop: 25, alignSelf: "start" }} />
        <Input type="password" placeholder="Enter Password" />
        <HrefBlock>
          <Text
            text="No account, "
            style={{ marginTop: 5, alignSelf: "start", fontSize: 15 }}
          />
          <Link to="/registration" style={{ fontSize: 16 }}>
            <Text
              text=" click here "
              style={{
                marginTop: 5,
                fontSize: 15,
                color: "purple",
              }}
            />
          </Link>
        </HrefBlock>
        <Button text="Sign In" />
      </LoginForm>
    </Container>
  );
};

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
    url("https://yastatic.net/s3/passport-auth-customs/customs/_/4vui26y6.jpg");
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`;

const Title = styled.div`
  color: ${colors.white};
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`;

const HrefBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`;
export default Login;
