import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export default function Dashboard() {
  const [isOpen, setIsOpen] = React.useState(false)
  const btnRef = React.useRef()

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen)
  }
  const handleFechar = () => {
    setIsOpen(false)
  }
  return (
    <>
      <button onClick={handleOpenDrawer}>teste</button>
      <Drawer
        isOpen={isOpen}
        onClose={handleFechar}
        placement="right"

      >
        <DrawerHeader>Tesatando Drawer</DrawerHeader>
        <DrawerBody>texto</DrawerBody>
      </Drawer>
    </>
  )
}
