import React from 'react'
import styled from 'styled-components'

const Series = () => {
  return <SeriesList style={{ color: 'white' }}>Series</SeriesList>
}
const SeriesList = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 1410px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  margin-top: 30px;
`
export default Series
