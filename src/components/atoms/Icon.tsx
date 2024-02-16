import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export interface IIcon {
  name: 'instagram' | 'facebook'
  size: SizeProp
}
type IIconsMap = {
  [Property in IIcon['name'] as Property]: IconDefinition
}

const iconsMap: IIconsMap = {
  instagram: faInstagram,
  facebook: faFacebook,
}

const Icon: React.FC<IIcon> = ({ name, size }) => {
  return (
    <FontAwesomeIcon
      className="transition-colors"
      icon={iconsMap[name]}
      size={size}
    />
  )
}

export default Icon
