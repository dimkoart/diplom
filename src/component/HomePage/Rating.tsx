import React, { FC } from 'react'
import ReactStars from 'react-rating-stars-component'

export interface IRatingProps {
  activeColor?: string
  count?: number
  size?: number
  onChange?: (newRating: number) => void
}

const RatingComponent: FC<IRatingProps> = ({
  activeColor,
  count,
  size,

  onChange,
}) => {
  return (
    <ReactStars
      activeColor={activeColor}
      count={count}
      size={size}
      onChange={onChange}
    />
  )
}

export default RatingComponent
