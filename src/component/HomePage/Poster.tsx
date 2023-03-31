import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Film } from '../../types/FilmsType'
import ReviewList from '../Reviews/ReviewList'
import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'
import RatingComponent from './Rating'
interface Props {
  films: Film
}
const Poster: FC<Props> = ({ films }) => {
  // const [comm, setComm] = useState<Comment[]>([])
  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = async () => {
  //   const data = await FilmService.fetchComments(1, films.filmId)
  //   setComm(data.items)
  // }

  return (
    <PosterContainer>
      <Content style={{}}>
        <Link
          to={`/filmPage/${films.filmId}`}
          style={{ textDecoration: 'none' }}
        >
          <Image>
            <img src={films.posterUrl} />
          </Image>
        </Link>
        <Video>
          <video
            src={require('../../video/trailer_4984.mp4')}
            controls
            style={{ width: 300 }}
          ></video>
        </Video>
        <StyledText style={{ marginTop: 10, fontSize: 15 }}>
          Trailer (dubbed)
        </StyledText>
        <StyledText
          style={{
            fontSize: 15,
            color: colors.gray,
          }}
        >
          September 24, 2014
        </StyledText>
      </Content>
      <Content style={{ marginTop: 20, marginLeft: 70 }}>
        <Link
          to={`/filmPage/${films.filmId}`}
          style={{ textDecoration: 'none' }}
        >
          <StyledText
            style={{
              fontWeight: 900,
              fontSize: 50,
              marginTop: 20,
            }}
          >
            {films.nameEn}
          </StyledText>
        </Link>
        <StyledText
          style={{
            marginTop: 20,
            fontSize: 20,
            color: colors.gray,
          }}
        >
          {films.nameEn}+18
        </StyledText>
        <Button>
          {
            <Icon
              icon='tv'
              size={25}
              color={colors.buttonLoginColor}
              style={{ marginRight: 5 }}
            />
          }
          {'I will watch'}
        </Button>
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
          John Wick - at first glance, the most ordinary average American who
          leads a quiet peaceful life. However, few people know that he was a
          hired killer, and one of the best professionals in his field. After
          the son of the head of a bandit group with his buddies steals his
          beloved 1969 Mustang, while killing his dog Daisy, who was a gift from
          his recently deceased wife, John is forced to return to his past. Now
          Wick begins to hunt for those who had the imprudence to cross his
          path, and he is ready for anything to take revenge.
        </StyledText>
        <RatingBlock>
          <RatingComponent
            activeColor={`${colors.yellow}`}
            size={50}
            count={10}
          />
          <StyledText
            style={{
              marginTop: 10,
              fontSize: 50,
              color: `${colors.gray}`,
            }}
          >
            {films.rating}
            <StyledText
              style={{
                marginTop: 10,
                fontSize: 17,
                color: `${colors.gray}`,
              }}
            >
              {films.ratingVoteCount} ratings IMDb : 7.40 660 096 ratings
            </StyledText>
          </StyledText>
        </RatingBlock>
      </Content>
      <Content style={{ marginTop: 10, marginLeft: 50 }}>
        <StyledText
          style={{
            marginLeft: 70,
            fontSize: 30,
          }}
        >
          Viewer Reviews
        </StyledText>
        <Reviews>
          <ReviewList />
        </Reviews>
      </Content>
    </PosterContainer>
  )
}
const PosterContainer = styled.div`
  display: flex;
  background-color: ${colors.posterBackGround};
  height: 700px;
  width: 1370px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  padding: 20px;
  margin-top: 20px;
`
const Image = styled.div`
  display: flex;
  margin-top: 10px;
  width: 300px;
  height: 450px;
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`
const Video = styled.div`
  display: flex;
  z-index: 1;
  background: ${colors.loginForm};
  width: 300px;
  height: 200px;
`
const Content = styled.div`
  display: inline-block;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  background-color: ${colors.gray};
  border-radius: 20px;
  color: ${colors.buttonText};
  width: 180px;
  height: 45px;
  border: 0;
  font-family: 'Poppins';
  font-style: normal;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.posterButton};
    transform: scale(1.1);
  }
  transition: 0.3s;
`
const RatingBlock = styled.div`
  display: inline-block;
`
const Reviews = styled.div`
  width: 500px;
  height: 650px;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 16px;
  ::-webkit-scrollbar {
    width: 11px;
    background-color: ${colors.scrollBar};
    border-radius: 16px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.scrollThumb};
    border-radius: 16px;
  }
`
export default Poster
