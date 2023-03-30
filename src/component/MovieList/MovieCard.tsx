import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Film } from '../../types/FilmsType'
interface Props {
  film: Film
}

const FilmCard: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  film,
  ...props
}) => {
  return (
    <Card {...props}>
      <img style={{ borderRadius: 15 }} src={film.posterUrl} />
    </Card>
  )
}
const Card = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  width: 169px;
  height: 250px;
  border-radius: 10px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  animation: 3s show ease;
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: 0.3s;
`
export default FilmCard
