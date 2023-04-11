import styled, { CSSProperties } from 'styled-components'
import { ChangeEvent, useEffect, useState } from 'react'
interface Props {
  toggleTheme: () => void
  isDarkTheme: string
  style: CSSProperties
}
const Label = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`

const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #00bfff;

    &:before {
      transform: translate(32px, -50%);
    }
  }
`
const ToggleSwitch = ({ toggleTheme, isDarkTheme, style }: Props) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    console.log(localStorage.getItem('theme'))
    setChecked(localStorage.getItem('theme') === 'light' ? true : false)
  }, [])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    toggleTheme()
    if (isDarkTheme === 'light') {
      setChecked(e.target.checked)
    } else {
      setChecked(false)
    }
  }

  return (
    <Label style={style}>
      <Input checked={checked} type='checkbox' onChange={handleChange} />
      <Switch />
    </Label>
  )
}

export default ToggleSwitch
