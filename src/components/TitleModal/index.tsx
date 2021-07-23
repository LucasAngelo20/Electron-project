import { FC, useRef } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  border,
} from '@chakra-ui/react'

import { ModalButton } from './style'

const TitleModal: FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <div>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'outside'}
      >
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: '#2f3640' }}>
          <ModalHeader color="#00a8ff">NOVA DOCUMENTAÇÃO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              color="#fff"
              
              type="text"
              placeholder="Digite a versão..."
              _placeholder={{ color: '#999' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              _hover={{ backgroundColor: 'transparent', color: '#006597' }}
              backgroundColor="transparent"
              color="#00a8ff"
              onClick={onClose}
            >
              Criar
            </Button>
            <Button
              _hover={{ backgroundColor: '#006597' }}
              backgroundColor="#00a8ff"
              color="#2f3640"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ModalButton ref={btnRef} onClick={onOpen}>
        {children}
      </ModalButton>
    </div>
  )
}

export default TitleModal
