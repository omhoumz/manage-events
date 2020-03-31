import React from 'react'

import { ButtonWrapper } from './button.styled'

const Button = ({ children, type = 'button', onClick }) => {
  const btnProps = { type, onClick }
  return <ButtonWrapper {...btnProps}>{children}</ButtonWrapper>
}

export default Button
