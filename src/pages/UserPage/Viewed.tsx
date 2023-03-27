import React, { FC, useEffect, useState } from 'react'
import { FilmService } from '../../services/FilmService'
import { Film } from '../../types/FilmsType'
import FilmCards from '../../component/MovieList/MovieList'
interface Props {
  setNawBarValue: (value: number) => void
  getNawBarValue: () => number
}
const Viewed: FC<Props> = ({ setNawBarValue, getNawBarValue }) => {
  const [films, setFilms] = useState<Film[]>([])
  const [page, changePage] = useState(1)
  const [pageCount] = useState(11)
  useEffect(() => {
    getData()
    {
      getNawBarValue() == 1
        ? setNawBarValue(getNawBarValue() + 1)
        : getNawBarValue() == 3
        ? setNawBarValue(getNawBarValue() - 1)
        : setNawBarValue(getNawBarValue())
    }
  }, [])
  const getData = async () => {
    const data = await FilmService.fetchPremieres(page)
    setFilms(data.releases)
  }
  const fetchMoreData = async () => {
    if (pageCount > page) {
      const film = await FilmService.fetchPremieres(page + 1)

      setFilms(films.concat(film.releases))
      changePage(page + 1)
    }
  }
  return <FilmCards films={films} fetchMoreData={fetchMoreData}></FilmCards>
}

export default Viewed
