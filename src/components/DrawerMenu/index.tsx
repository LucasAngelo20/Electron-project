import React, { FC } from 'react'

import {
  DrawerContainer,
  DrawerIconsGroup,
  DrawerIcon,
  DarkModeToggle,
  Toggle,
  DrawerOptionTitle,
} from './style'

import {
  SettingsIcon,
  AttachmentIcon,
  Search2Icon,
  AddIcon,
} from '@chakra-ui/icons'

import TitleModal from '../../components/TitleModal'

interface ToggleProps {
  position?: number
}

const DrawerMenu: FC<ToggleProps> = () => {
  const [isActive, setIsActive] = React.useState(false)
  return (
    <DrawerContainer>
      <DrawerIconsGroup>
        <TitleModal>
          <DrawerIcon>
            <DrawerOptionTitle>Criar</DrawerOptionTitle>
            <AddIcon color="#00a8ff" />
          </DrawerIcon>
        </TitleModal>
        <DrawerIcon>
          <DrawerOptionTitle>Procurar</DrawerOptionTitle>
          <Search2Icon color="#00a8ff" />
        </DrawerIcon>
        <DrawerIcon>
          <DrawerOptionTitle>Adicionar</DrawerOptionTitle>
          <AttachmentIcon color="#00a8ff" />
        </DrawerIcon>
        <DrawerIcon>
          <DrawerOptionTitle>Configuração</DrawerOptionTitle>
          <SettingsIcon color="#00a8ff" />
        </DrawerIcon>
      </DrawerIconsGroup>
      <DarkModeToggle onClick={() => setIsActive(!isActive)}>
        <Toggle position={isActive ? '20' : '0'} />
      </DarkModeToggle>
    </DrawerContainer>
  )
}

export default DrawerMenu
