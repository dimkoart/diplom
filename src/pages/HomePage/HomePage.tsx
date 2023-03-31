import styled from 'styled-components'
import Header from '../../component/header/Header'
import colors from '../../constants/colors'
import { useEffect, useState } from 'react'
import { Film } from '../../types/FilmsType'
import { FilmService } from '../../services/FilmService'
import SwipedSlider from '../../component/HomePage/SwiperSlider'
import SideBar from '../../component/HomePage/SideBar'
import { Route, Routes } from 'react-router-dom'
import Films from './Films'
import Series from './Series'
import Anime from './Anime'
import SortedBlock from '../../component/HomePage/SortedBlock'
import React from 'react'
const HomePage = () => {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await FilmService.fetchFilms(1)
    setFilms(data.films)
  }

  return (
    <Container id='Container'>
      <Header active={'home'} />
      <Content>
        <Slider>
          <SwipedSlider films={films} />
        </Slider>
        <SortedBlock />
        <FilmsNavBarContainer>
          <SideBar />
          <Routes>
            <Route path='films' element={<Films />} />
            <Route path='series' element={<Series />} />
            <Route path='anime' element={<Anime />} />
          </Routes>
        </FilmsNavBarContainer>
      </Content>
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
`
const Slider = styled.div`
  display: inline-block;
  width: 1600px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  padding: 20px;
  background-color: ${colors.loginForm};
  margin-top: 60px;
`

const FilmsNavBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default HomePage
