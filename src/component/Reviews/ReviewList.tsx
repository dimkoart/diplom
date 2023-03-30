import React from 'react'
import styled from 'styled-components'
import ReviewCard, { ReviewType } from './ReviewCard'

const ReviewList = () => {
  const review: ReviewType[] = [
    {
      negative: true,
      userName: 'chort1123',
      text: 'Claimed and actively promoted as a stylish furious action, "John Wick"turned out to be another film from the recently revived series of “pensioners back in the saddle” (“RED”, “Hostage”, “The Great Equalizer”). The only clear and big hit on this list is the first Hostage, and John Wick hangs somewhere in a series of Russophobic retro crafts along with The Equalizer and, it seems, the impending Hostage 3. But the point is not about bad dudes from Russia or Eastern',
    },
    {
      negative: false,
      userName: 'piskogriz69',
      text: 'Europe, but about the fact that the film came out simply no and dried up, like yesterdays crackers. John Wick is a tired Keanu with an unshaven face, which he has not changed for many years, that he goes to bars in a beautiful three-piece suit and unexpectedly kills Russians to unexpectedly stylish music. Kills uninventively, clumsily, performs tricks that could not be performed without generating spectator empathy for',
    },
    {
      negative: false,
      userName: 'yebok1337',
      text: 'John Wick is another really cool movie this year. Of course, he will not be on a par with InterstellaGone GirEdge of Tomorr, but he can attract attention. And it will attract, especially the attention of those who miss the old-school fighters in the style of Die Hard, when the main character i',
    },
  ]

  return (
    <List>
      {review.map((rew) => (
        <ReviewCard
          key={rew.userName}
          negative={rew.negative}
          text={rew.text}
          userName={rew.userName}
        ></ReviewCard>
      ))}
    </List>
  )
}
const List = styled.div``
export default ReviewList
