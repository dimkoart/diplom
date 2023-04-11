import React, { FC } from 'react'
import styled from 'styled-components'

import { Film } from '../../types/FilmsType'
import SwipedSlider from '../HomePage/SwiperSlider'
import { StyledText } from '../UI/Text'
import Comments from './Comments'
interface Props {
  films: Film[]
}
const FilmVideo: FC<Props> = ({ films }) => {
  return (
    <BottomBlock>
      <VideoComment>
        <video
          src={require('../../video/trailer_4984.mp4')}
          muted
          controls
          style={{ position: 'relative', top: -20, width: 1000, height: 690 }}
        ></video>
        <Comments />
      </VideoComment>
      <StyledText
        style={{
          marginTop: 30,
          fontSize: 40,
          marginLeft: 550,
        }}
      >
        Recommended for viewing
      </StyledText>
      <Slider>
        <SwipedSlider films={films} />
      </Slider>
    </BottomBlock>
  )
}
const BottomBlock = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  box-shadow: 2px 5px 25px -3px ${(props) => props.theme.textShadow};
  background-color: ${(props) => props.theme.loginForm};
  border-radius: 16px;
  padding: 20px;
`
const Slider = styled.div`
  display: inline-block;
  width: 1600px;
  margin-top: 10px;
`
const VideoComment = styled.div`
  display: flex;
`
export default FilmVideo
