import React, { InputHTMLAttributes, HTMLAttributes } from 'react'

import { Container, Input } from './style'

import { IconBaseProps } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  placeholder?: string
  icon?: React.ComponentType<IconBaseProps>
  iconSize?: number
  iconColor?: string
  label?: string
  placeholderColor?: string
  fontSize?: number
  height?: number
  textColor?:string,
}

interface DivProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
}

const CustomInput: React.FC<InputProps & DivProps> = ({
  icon: Icon,
  color,
  placeholderColor,
  iconSize,
  iconColor,
  width,
  fontSize,
  label,
  height,
  textColor,
  ...rest
}) => {
  return (
    <>
      <p>{label}</p>
      <Container color={color} width={width}>
        {Icon && <Icon size={iconSize} color={iconColor} />}
        <Input
          {...rest}
          color={placeholderColor}
          fontSize={fontSize}
          textColor={textColor}
          height={height}
        />
      </Container>
    </>
  )
}

export default CustomInput
