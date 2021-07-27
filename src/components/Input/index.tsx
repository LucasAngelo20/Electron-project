import React from 'react'

import { Container } from './style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <Container>
      <input {...props} />
    </Container>
  )
}

export default Input;
