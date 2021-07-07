import React from 'react'

import CustomInput from '../CustomInput'

import { BiSearchAlt } from 'react-icons/bi'

const Header: React.FC = () => {
  return (
    <div>
      <h1>Header</h1>
      <CustomInput
        name="Input"
        placeholder="Digite o que procura..."
        icon={BiSearchAlt}
        iconColor='#D3D3D3'
        color="#fff"
        placeholderColor="#D3D3D3"
        iconSize={20}
        width={230}
        fontSize={16}
        height={50}
        textColor='#D3D3D3'
      />
    </div>
  )
}

export default Header