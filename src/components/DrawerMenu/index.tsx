import React, { FC } from 'react'

import {
  DrawerContainer,
  DrawerIconsGroup,
  DrawerIcon,
  DarkModeToggle,
  Toggle,
} from './style'

import {
  SettingsIcon,
  AttachmentIcon,
  Search2Icon,
  AddIcon,
} from '@chakra-ui/icons'

interface ToggleProps {
  position?: number
}

const DrawerMenu: FC<ToggleProps> = () => {
  const [isActive, setIsActive] = React.useState(false)
  return (
    <DrawerContainer>
      <DrawerIconsGroup>
        <DrawerIcon>
          <AddIcon color="#00a8ff" />
        </DrawerIcon>
        <DrawerIcon>
          <Search2Icon color="#00a8ff" />
        </DrawerIcon>
        <DrawerIcon>
          <AttachmentIcon color="#00a8ff" />
        </DrawerIcon>
        <DrawerIcon>
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
