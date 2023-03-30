import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Poster from '../../component/HomePage/Poster'
import colors from '../../constants/colors'
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
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  padding: 20px;
  background-color: ${colors.loginForm};
`
export default Films
