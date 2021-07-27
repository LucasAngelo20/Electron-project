import React from 'react'

import { Container } from './style'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  )
}

export default Button
