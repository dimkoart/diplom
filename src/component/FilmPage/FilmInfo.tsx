import React, { FC } from 'react'
import styled, { useTheme } from 'styled-components'

import { Cast, FilmId } from '../../types/FilmsType'
import RatingComponent from '../HomePage/Rating'
import { StyledText } from '../UI/Text'
import CastList from './CastList'
interface Props {
  films: FilmId
  cast: Cast[]
}
const FilmInfo: FC<Props> = ({ films, cast }) => {
  const theme = useTheme()
  return (
    <TopBlock>
      <InfoFilms>
        <Image>
          <img src={films.posterUrl} style={{ borderRadius: 16 }} />
        </Image>
      </InfoFilms>
      <InfoFilms style={{ marginTop: 20, marginLeft: 150 }}>
        <StyledText
          style={{
            fontWeight: 900,
            fontSize: 50,
            marginTop: 20,
          }}
        >
          {films.nameOriginal}
        </StyledText>
        <StyledText
          style={{
            marginTop: 20,
            fontSize: 20,
            color: theme.gray,
          }}
        >
          {films.nameOriginal}+18
        </StyledText>

        <StyledText
          style={{
            marginTop: 30,
            fontSize: 30,
          }}
        >
          About the film
        </StyledText>
        <StyledText
          style={{
            marginTop: 30,
            fontSize: 20,
            width: 450,
            letterSpacing: 2,
            fontWeight: 100,
            color: 'gray',
          }}
        >
          {films.description}
        </StyledText>
        <StyledText
          style={{
            marginTop: 30,
            fontSize: 30,
          }}
        >
          Cast
        </StyledText>
        <CastBlock>
          {cast.map((cas: Cast) => (
            <StyledText
              key={cas.nameEn}
              style={{ fontSize: 20, color: 'gray' }}
            >
              {cas.nameEn}
            </StyledText>
          ))}
        </CastBlock>
        <RatingBlock style={{}}>
          <RatingComponent
            activeColor={`${theme.yellow}`}
            size={50}
            count={10}
            value={films.ratingKinopoisk}
          />
          <StyledText
            style={{
              marginTop: 10,
              fontSize: 50,
              color: `${theme.gray}`,
            }}
          >
            {films.ratingKinopoisk}
            <StyledText
              style={{
                marginTop: 10,
                fontSize: 17,
                color: `${theme.gray}`,
              }}
            >
              {films.ratingKinopoiskVoteCount} ratings IMDb : 7.40 660 096
              ratings
            </StyledText>
          </StyledText>
        </RatingBlock>
      </InfoFilms>
      <InfoFilms>
        <StyledText
          style={{
            marginTop: 30,
            fontSize: 30,
          }}
        >
          Cast Photo
        </StyledText>
        <CastList cast={cast} />
      </InfoFilms>
    </TopBlock>
  )
}
const TopBlock = styled.div`
  display: flex;
  width: 1600px;
  padding: 20px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
`
const InfoFilms = styled.div`
  display: inline-block;
`
const RatingBlock = styled.div`
  display: inline-block;
`
const CastBlock = styled.div`
  display: flex;
  width: 200px;
`
const Image = styled.div`
  display: flex;
  margin-top: 10px;
  width: 300px;
  height: 650px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`
export default FilmInfo
