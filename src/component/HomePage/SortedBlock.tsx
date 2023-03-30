import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { StyledText } from '../UI/Text'

const SortedBlock = () => {
  return (
    <Sorted>
      <StyledText>Sort by:</StyledText>
      <StyledText style={{ fontSize: 18 }}>Year</StyledText>
      <Select>
        <option value='' hidden>
          Year
        </option>
        <option value='2001'>2001</option>
        <option value='2002'>2002</option>
        <option value='2003'>2003</option>
        <option value='2004'>2004</option>
      </Select>
      <StyledText style={{ fontSize: 18 }}> Сountry</StyledText>
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
  background-color: ${colors.loginForm};
  height: 25px;
  width: 450px;
  border-radius: 16px 16px 0px 0px;
  margin-top: 30px;
  right: -1100px;
  padding: 20px;
`
const Select = styled.select`
  width: 60px;
  height: 35px;
  background: ${colors.white};
  color: ${colors.gray};
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  option {
    color: ${colors.black};
    background: ${colors.white};
  }
`
export default SortedBlock
