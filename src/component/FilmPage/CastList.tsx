import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Cast } from '../../types/FilmsType'
interface Props {
  cast: Cast[]
}
const CastList: FC<Props> = ({ cast }) => {
  return (
    <CastsList>
      {cast.map((cas: Cast) => (
        <CastCard key={cas.posterUrl}>
          <img style={{ borderRadius: 5 }} src={cas.posterUrl} />
        </CastCard>
      ))}
    </CastsList>
  )
}
const CastsList = styled.div`
  display: inline;
  width: 600px;
  justify-content: space-between;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`
const CastCard = styled.div`
  display: inline-flex;
  margin-top: 10px;
  margin-left: 15px;
  width: 160px;
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
`
export default CastList
