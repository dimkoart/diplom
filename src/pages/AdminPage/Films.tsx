import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import MovieList from '../../component/MovieList/MovieList'
import Input from '../../component/UI/Input'
import { StyledText } from '../../component/UI/Text'

import { FilmService } from '../../services/FilmService'
import { Film } from '../../types/FilmsType'
interface Props {
  setNawBarValue: (value: number) => void
  getNawBarValue: () => number
}
const Films: FC<Props> = ({ setNawBarValue, getNawBarValue }) => {
  const [films, setFilms] = useState<Film[]>([])
  const [page, changePage] = useState(1)

  useEffect(() => {
    getData()
    getNawBarValue() == 1
      ? setNawBarValue(getNawBarValue() + 1)
      : getNawBarValue() == 3
      ? setNawBarValue(getNawBarValue() - 1)
      : setNawBarValue(getNawBarValue())
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
  return (
    <FIlmContainer>
      <StyledText style={{ fontSize: 30, marginLeft: 30 }}>
        Enter Film
      </StyledText>
      <Input
        placeholder='Film Name'
        style={{ marginTop: 20, marginLeft: 30 }}
      />
      <BottomContainer>
        <FIlmList>
          <MovieList films={films} fetchMoreData={fetchMoreData}></MovieList>
        </FIlmList>
      </BottomContainer>
    </FIlmContainer>
  )
}
const FIlmContainer = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
  width: 1560px;
  height: 720px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
`
const FIlmList = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;

  height: 590px;
`
const BottomContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 16px;
  height: 630px;
`
export default Films
