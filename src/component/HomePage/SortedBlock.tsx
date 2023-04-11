import React from 'react'
import styled, { useTheme } from 'styled-components'

import { StyledText } from '../UI/Text'
import Input from '../UI/Input'

const SortedBlock = () => {
  const theme = useTheme()
  return (
    <Sorted>
      <StyledText style={{ fontSize: 20, marginLeft: 30, marginTop: 8 }}>
        Enter Film
      </StyledText>
      <Input
        placeholder='Film Name'
        style={{
          height: 40,
          marginLeft: 10,
          width: 200,
          backgroundColor: theme.white,
          marginRight: 50,
          color: theme.black,
          fontSize: 20,
        }}
      />
      <StyledText style={{ marginTop: 8 }}>Sort by:</StyledText>
      <StyledText style={{ fontSize: 18, marginTop: 8 }}>Year</StyledText>
      <Select style={{ marginRight: 50 }}>
        <option value='' hidden>
          Year
        </option>
        <option value='2001'>2001</option>
        <option value='2002'>2002</option>
        <option value='2003'>2003</option>
        <option value='2004'>2004</option>
      </Select>
      <StyledText style={{ fontSize: 18, marginTop: 8 }}> Сountry</StyledText>
      <Select style={{ width: 80 }}>
        <option value='' hidden>
          Сountry
        </option>
        <option value='Belarus'>Belarus</option>
        <option value='Germany'>Germany</option>
        <option value='UK'>UK</option>
        <option value='USA'>USA</option>
      </Select>
    </Sorted>
  )
}
const Sorted = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${(props) => props.theme.loginForm};
  height: 25px;
  width: 900px;
  border-radius: 16px 16px 0px 0px;
  margin-top: 30px;
  right: -650px;
  padding: 20px;
`
const Select = styled.select`
  width: 60px;
  height: 35px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.gray};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  option {
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.white};
  }
`
export default SortedBlock
