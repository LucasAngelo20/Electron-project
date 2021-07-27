import React, { useState } from 'react'

import api from '../../services/api'

import { Container, Form } from './style'

import { useToast } from '@chakra-ui/react'

import Input from '../../components/Input'
import Button from '../../components/Button'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassaword] = useState('')

  const toast = useToast()

  const handleRegisterUser = async () => {
    try {
      const response = await api.post('/user/register', {
        name: name,
        email: email,
        password: password,
      })
      if (response.data.error == true) {
        toast({
          title: 'Error ao criar a conta',
          description: response.data.message,
          position: 'top-right',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Conta criada',
          description: 'A sua conta foi criada!',
          position: 'top-right',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setName('')
        setEmail('')
        setPassaword('')
      }
    } catch (err) {
      return console.log(err)
    }
  }
  return (
    <Container>
      <Form>
        <h1>Signup</h1>
        <Input
          onChange={e => setName(e.target.value)}
          name="Nome"
          placeholder="Username"
          value={name}
        />
        <Input
          onChange={e => setEmail(e.target.value)}
          name="Email"
          placeholder="Email"
          value={email}
        />
        <Input
          onChange={e => setPassaword(e.target.value)}
          name="Senha"
          placeholder="Password"
          value={password}
        />
        <Button
          onClick={() => handleRegisterUser()}
          name="Cadastrar-usuario-button"
        >
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}
export default SignUp
