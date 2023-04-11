import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Poster from '../../component/HomePage/Poster'

import { FilmService } from '../../services/FilmService'
import { Film } from '../../types/FilmsType'

const Films = () => {
  const [films, setFilms] = useState<Film[]>([])

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await FilmService.fetchFilms(1)
    const series = await FilmService.fetchSeries(1)
    setFilms(data.films)
    console.log(series.docs)
  }

  return (
    <FilmsList>
      {films.map((film) => (
        <Poster key={film.filmId} films={film}></Poster>
      ))}
    </FilmsList>
  )
}
const FilmsList = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 1410px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
`
export default Films
