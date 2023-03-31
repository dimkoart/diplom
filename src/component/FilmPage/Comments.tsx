import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import ReviewList from '../Reviews/ReviewList'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { StyledText } from '../UI/Text'

const Comments = () => {
  return (
    <Comment>
      <StyledText
        style={{
          fontSize: 40,
        }}
      >
        Comments
      </StyledText>
      <Input
        placeholder='Title'
        style={{ marginTop: 25, marginLeft: 10, width: 462 }}
      />
      <CommentStuff
        style={{
          position: 'absolute',
        }}
      >
        <Input
          placeholder='Add comment'
          style={{ marginTop: 15, marginLeft: 10, width: 462 }}
        />
        <Button
          style={{
            position: 'relative',
            left: -100,
            marginTop: 15,
            width: 100,
            height: 49.48,
            backgroundColor: colors.inputColor,
          }}
          text={'Send'}
        />
      </CommentStuff>
      <Reviews>
        <ReviewList />
      </Reviews>
    </Comment>
  )
}
const Comment = styled.div`
  display: inline-block;
  margin-top: 25px;
  margin-left: 25px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};

  border-radius: 16px;
  padding: 20px;
  width: 520px;
`
const CommentStuff = styled.div`
  display: flex;
`
const Reviews = styled.div`
  width: 500px;
  overflow: scroll;
  overflow-x: hidden;
  border-radius: 16px;
  height: 430px;
  margin-top: 75px;
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
export default Comments
