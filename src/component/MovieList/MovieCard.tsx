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
      <img style={{ borderRadius: 5 }} src={film.posterUrl} />
    </Card>
  )
}
const Card = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  width: 169px;
  height: 250px;
  border-radius: 4px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 100px ${colors.black};
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
