import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Icon from '../UI/Icon'
import { StyledText } from '../UI/Text'
export interface ReviewType {
  negative: boolean
  userName: string
  text: string
}
const ReviewCard: FC<ReviewType> = ({ negative, userName, text }) => {
  return (
    <Card
      style={{
        backgroundColor:
          negative === true ? colors.reviewNegative : colors.reviewpositive,
      }}
    >
      <Header>
        <img
          src='https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-07/Ethiopia-UN0418425.jpg?itok=7wJB8CbZ'
          style={{
            width: 76.8,
            height: 76.8,
            borderRadius: 90,
            marginTop: 10,
            marginLeft: 10,
          }}
        />
        <HeadersBlock style={{ marginLeft: 5 }}>
          <StyledText
            style={{
              fontSize: 16,
              fontWeight: 500,
              marginTop: 10,
              color: `${colors.black}`,
            }}
          >
            {userName}
          </StyledText>
          <StyledText
            style={{
              fontSize: 12,

              marginTop: 5,
              color: `${colors.black}`,
            }}
          >
            {'107 reviews'}
          </StyledText>
        </HeadersBlock>
        <HeadersBlock style={{ marginLeft: 15 }}>
          <StyledText
            style={{
              fontSize: 15,

              marginTop: 5,
              color: `${colors.gray}`,
            }}
          >
            {'January 14, 2015 at 08:15 pm'}
          </StyledText>
          <StyledText
            style={{
              fontSize: 15,
              marginLeft: 140,
              marginTop: 5,
              color: `${colors.gray}`,
            }}
          >
            {'direct link'}
          </StyledText>
        </HeadersBlock>
      </Header>
      <hr style={{ margin: '15px 0' }} />
      <Content>
        <StyledText
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginLeft: 10,
            marginTop: 10,
            color: `${colors.black}`,
          }}
        >
          {'Wick end'}
        </StyledText>
        <StyledText
          style={{
            fontSize: 14,
            marginLeft: 10,
            color: `${colors.black}`,
          }}
        >
          {text}
        </StyledText>
        <LikeDisBlock>
          <StyledText
            style={{
              fontSize: 13,
              marginTop: 20,
              color: `${colors.gray}`,
              marginBottom: 15,
            }}
          >
            {
              <Icon
                icon='bubble'
                size={20}
                color={colors.gray}
                style={{ marginRight: 5, marginLeft: 5 }}
              />
            }
            {'Add a comment'}
          </StyledText>
          <Button style={{ marginLeft: 45, marginRight: 20, marginTop: 15 }}>
            <Icon
              icon='heart'
              size={16}
              color='green'
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            Healthy 179
          </Button>
          <Button style={{ marginTop: 15 }}>
            <Icon
              icon='sad2'
              size={16}
              color={colors.red}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            No 69
          </Button>
        </LikeDisBlock>
      </Content>
    </Card>
  )
}
const Card = styled.div`
  display: inline-block;
  margin-top: 10px;
  margin-left: 15px;
  width: 462px;
  border-radius: 10px;
  background-color: ${colors.reviewNegative};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`
const Header = styled.div`
  display: flex;
`
const HeadersBlock = styled.div`
  display: inline-block;
`
const Content = styled.div`
  display: inline-block;
`
const LikeDisBlock = styled.div`
  display: flex;
`
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  background-color: ${colors.gray};
  border-radius: 20px;
  color: ${colors.buttonText};
  width: 114px;
  height: 30px;
  border: 0;
  font-family: 'Poppins';
  font-style: normal;
  &:hover {
    background-color: ${colors.posterButton};
  }
  transition: 0.3s;
`
export default ReviewCard
