import React, { FC } from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from '../../assets/icon.json'
interface Props {
  icon?: string
  color?: string
  size?: number
}
const Icon: FC<Props> = ({ icon, color, size }: Props) => {
  return (
    <IcoMoon iconSet={iconSet} icon={icon!} color={color} size={size || 24} />
  )
}

export default Icon
