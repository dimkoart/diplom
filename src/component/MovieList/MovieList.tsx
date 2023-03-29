import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Film } from '../../types/FilmsType'
import FilmCard from './MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
  films: Film[]
  fetchMoreData: () => void
}
const FilmList: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  films,
  fetchMoreData,
  ...props
}) => {
  console.log('listgovna')
  return (
    <Films {...props}>
      <InfiniteScroll
        dataLength={films.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4></h4>}
        scrollableTarget='Container'
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: 750,
          overflowX: 'hidden',
        }}
      >
        {films.map((film) => (
          <FilmCard key={film.filmId} film={film}></FilmCard>
        ))}
      </InfiniteScroll>
    </Films>
  )
}
const Films = styled.div``
export default FilmList
