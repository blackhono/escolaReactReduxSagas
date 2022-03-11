/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { get } from 'lodash'

import { api, createUser } from '../../services/api'
import Loading from '../../components/Loading'

import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formErrors = false
    if (name.length < 3 || name.length > 255) {
      formErrors = true
      toast.error('Nome deve ter entre 3 e 12 caracteres')
    }
    if (password.length < 3 || password.length > 255) {
      formErrors = true
      toast.error('Senha deve ter entre 6 e 12 caracteres')
    }
    if (!isEmail(email)) {
      formErrors = true
      toast.error('Email invalido!')
    }

    // eslint-disable-next-line no-useless-return
    if (formErrors) return

    setIsLoading(true)
    await createUser(name, email, password)
    setIsLoading(false)
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      <Container>
        <h1>Register</h1>
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='nome'>
            Nome:
            <input
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              placeholder='Seu nome'
            />
          </label>
          <label htmlFor='email'>
            Email:
            <input
              type='text'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              placeholder='Seu email'
            />
          </label>
          <label htmlFor='password'>
            Senha:
            <input
              type='text'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='Sua senha'
            />
          </label>
          <button type='submit'>Criar</button>
        </Form>
      </Container>
    </>
  )
}
