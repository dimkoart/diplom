import React, { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { Film } from '../../types/FilmsType'
import Icon from '../UI/Icon'
interface Props {
  film: Film
  icon?: string
}

const FilmCard: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  film,
  icon,
  ...props
}) => {
  const theme = useTheme()
  return (
    <Link to={`/filmPage/${film.filmId}`}>
      <Card {...props} style={{ textDecoration: 'none' }}>
        <img style={{ borderRadius: 5 }} src={film.posterUrl} />
        <Icon
          icon={icon || ''}
          size={30}
          color={theme.red}
          style={{ position: 'absolute' }}
        />
      </Card>
    </Link>
  )
}
const Card = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  width: 169px;
  height: 250px;
  border-radius: 4px;

  border-radius: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 100px ${(props) => props.theme.black};
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
