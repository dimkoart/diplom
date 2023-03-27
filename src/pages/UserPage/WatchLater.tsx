import React, { FC, useEffect } from 'react'
interface Props {
  setNawBarValue: (value: number) => void
  getNawBarValue: () => number
}
const WatchLater: FC<Props> = ({ setNawBarValue, getNawBarValue }) => {
  useEffect(() => {
    {
      getNawBarValue() == 1
        ? setNawBarValue(getNawBarValue() + 2)
        : getNawBarValue() == 2
        ? setNawBarValue(getNawBarValue() + 1)
        : setNawBarValue(getNawBarValue())
    }
  }, [])
  return <div style={{ color: 'white' }}>WatchLater</div>
}

export default WatchLater
