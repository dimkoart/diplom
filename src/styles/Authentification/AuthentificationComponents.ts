import styled from 'styled-components'
import colors from '../../constants/colors'

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
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

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

export const Title = styled.div`
  color: ${(props) => props.color || colors.white};
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`
export const ForgetPasswordBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
`
