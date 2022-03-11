/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useDispatch } from 'react-redux'
import { get } from 'lodash'

import * as actions from '../../storeRedux/modules/auth/actions'
import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function Login(props) {
  const dispatch = useDispatch()

  const prevPath = get(props, 'location.state.prevPath', '/')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let formErrors = false
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

    dispatch(actions.loginRequest({ email, password, prevPath }))
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
      </Container>
      <Container>
        <Form onSubmit={handleSubmit}>
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
              type='password'
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
