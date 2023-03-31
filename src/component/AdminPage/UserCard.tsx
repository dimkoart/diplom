import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Button from '../UI/Button'
import { StyledText } from '../UI/Text'
export type User = {
  name: string
  status: string
  subscription: string
}
interface Props {
  user: User
}
const UserCard: FC<Props> = ({ user }: Props) => {
  return (
    <Card
      style={{
        backgroundColor: user.status === 'UnBunned' ? colors.reviewGreen : '',
      }}
    >
      <img
        src='https://lastfm.freetls.fastly.net/i/u/770x0/184fc92686e96c0f0b63e426c233bd59.jpg'
        style={{
          borderRadius: 90,
          height: 70,
          cursor: 'pointer',
        }}
      />
      <StyledText style={{ color: 'black', fontSize: 30 }}>
        {user.name}
      </StyledText>
      <StyledText style={{ color: 'black', fontSize: 30, marginLeft: 100 }}>
        Status:
      </StyledText>
      <StyledText style={{ color: 'green', fontSize: 30 }}>
        {user.status}
      </StyledText>
      <StyledText style={{ color: 'black', fontSize: 30, marginLeft: 100 }}>
        Subscription:
      </StyledText>
      <StyledText style={{ color: 'green', fontSize: 30 }}>
        {user.subscription}
      </StyledText>
      <Button
        style={{
          marginTop: 0,
          marginLeft: 320,
          width: 100,
          backgroundColor: 'white',
        }}
        text='Ban'
      />
      <Button
        style={{
          marginTop: 0,
          marginLeft: 10,
          width: 100,
          backgroundColor: 'white',
        }}
        text='Unban'
      />
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 75px;
  background-color: ${colors.reviewNegative};
  border-radius: 16px;
  padding: 5px;
`
export default UserCard
