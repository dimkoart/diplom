import styled from 'styled-components'
import colors from '../../constants/colors'

const Input = (props) => {
  return <LoginInput {...props} />
}

const LoginInput = styled.input`
  display: flex;
  flex-shrink: 0;
  background: rgb(28, 30, 33);
  box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
  color: rgb(100, 100, 100);
  width: 280px;
  height: 45px;
  border: 0;
  top: -2px;
  padding: 0 0 0 20px;
  font-weight: 700;
  border-radius: 8px;
  margin-bottom: 10px;
  :focus {
    color: ${colors.white};
  }
`

export default Input
