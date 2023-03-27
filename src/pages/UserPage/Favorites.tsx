import React, { useEffect, useState } from 'react'
import FilmCards from '../../component/MovieList/MovieList'
import { FilmService } from '../../services/FilmService'
import { Film } from '../../types/FilmsType'

const Favorites = () => {
  const [films, setFilms] = useState<Film[]>([])
  const [page, changePage] = useState(1)

  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await FilmService.fetchFilms(page)
    setFilms(data.films)
  }
  const fetchMoreData = async () => {
    const film = await FilmService.fetchFilms(page + 1)
    setFilms(films.concat(film.films))
    changePage(page + 1)
  }
  return <FilmCards films={films} fetchMoreData={fetchMoreData}></FilmCards>
}

export default Favorites
