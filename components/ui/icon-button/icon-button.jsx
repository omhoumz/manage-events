import React, { memo } from 'react'

import { IconWrapper } from './icon-button.styled'

const IconButton = memo(function IconButton({
  children,
  icon,
  onClick,
  color,
}) {
  return (
    <IconWrapper onClick={onClick} color={color}>
      {icon || children}
    </IconWrapper>
  )
})

export default IconButton
