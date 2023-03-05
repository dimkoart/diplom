import React from 'react'
import IcoMoon from 'react-icomoon'
import iconSet from '../icon.json'
interface Props {
  icon?: string | undefined
  color?: string | undefined
  size?: number
}
const Icon = ({ icon, color, size }: Props) => {
  return (
    <IcoMoon iconSet={iconSet} icon={icon!} color={color} size={size || 24} />
  )
}

export default Icon
