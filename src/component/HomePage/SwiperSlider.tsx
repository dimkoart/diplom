import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Film } from '../../types/FilmsType'
import FilmCard from '../MovieList/MovieCard'
import { A11y, Navigation } from 'swiper'
import styled, { useTheme } from 'styled-components'
import Icon from '../UI/Icon'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css'

interface Props {
  films: Film[]
}
const SwipedSlider: FC<Props> = ({ films }) => {
  const theme = useTheme()
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={2}
      slidesPerView={8}
      navigation={{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {films.map((film) => (
        <SwiperSlide key={film.filmId}>
          <FilmCard film={film}></FilmCard>
        </SwiperSlide>
      ))}
      <ButtonsBlock>
        <Button className='swiper-prev'>
          <Icon icon='arrow-left2' size={30} color={theme.iconSwiper} />
        </Button>
        <Button className='swiper-next'>
          <Icon icon='arrow-right2' size={30} color={theme.iconSwiper} />
        </Button>
      </ButtonsBlock>
    </Swiper>
  )
}
const Button = styled.button`
  display: flex;
  z-index: 10;
  width: 35px;
  border: 0;
  background: ${(props) => props.theme.swiperButton};
  opacity: 90%;
  border-radius: 5px;
  cursor: pointer;
  :disabled {
    opacity: 0.35;
  }
`

const ButtonsBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  top: -125px;
`
export default SwipedSlider
