import styled from 'styled-components'

const NewButton = ({ text, style, icon, ...props }) => {
  return (
    <Button style={style} {...props}>
      {text}
      {!!icon && (
        <Icon src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' />
      )}
    </Button>
  )
}

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`

const Button = styled.button`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background: rgb(182, 55, 156);
  box-shadow: 2px 5px 25px -3px rgba(135, 135, 135, 0.25);
  color: rgb(100, 100, 100);
  padding-left: 10px;
  padding-right: 10px;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  right: 110px;
  border: 3px solid rgb(52, 56, 61);
  font-size: 15px;
  text-align: center;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgb(0, 126, 165);
    cursor: pointer;
  }
`

export default NewButton
