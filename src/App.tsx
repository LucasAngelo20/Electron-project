import { GlobalStyle } from './styles/GlobalStyles'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

import { Container, Body } from './style'

import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import DrawerMenu from './components/DrawerMenu'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <DrawerMenu />
        <Body>
          <SignUp/>
          <Dashboard />
        </Body>
      </Container>
    </ChakraProvider>
  )
}
