import React from 'react'
import styled from 'styled-components'
import Header from '../component/header/Header'

const FilmsPage = () => {
  return (
    <Container>
      <Header active={'filmPage'} />
    </Container>
  )
}
const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
`
const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: scroll;
  overflow-x: hidden;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url('https://yastatic.net/s3/passport-auth-customs/customs/_/4vui26y6.jpg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-color: black;
`
export default FilmsPage
