import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import FilmInfo from '../component/FilmPage/FilmInfo'
import FilmVideo from '../component/FilmPage/FilmVideo'
import Header from '../component/header/Header'
import { FilmService } from '../services/FilmService'
import { Cast, Film, FilmId } from '../types/FilmsType'

const FilmsPage = () => {
  const params = useParams()
  const [films, setFilms] = useState<FilmId>({
    kinopoiskId: 0,
    posterUrl: '',
    ratingKinopoisk: 7,
    ratingKinopoiskVoteCount: 0,
    nameOriginal: '',
    description: '',
    genres: [{ genre: '' }],
  })
  const [cast, setCast] = useState<Cast[]>([])
  const [film, setFilm] = useState<Film[]>([])
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await FilmService.fetchFilmId(Number(params.id))
    const cast = await FilmService.fetchCast(Number(params.id))
    const film = await FilmService.fetchFilms(1)
    setFilm(film.films)
    setFilms(data)
    setCast(cast.slice(0, 5))
  }
  return (
    <Container>
      <Header active={'filmPage'} />
      <Content>
        <FilmInfo films={films} cast={cast} />
        <FilmVideo films={film} />
      </Content>
    </Container>
  )
}

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
const Content = styled.div`
  display: inline-block;
  width: 1600px;
  padding: 20px;
  margin-top: 60px;
`

export default FilmsPage
