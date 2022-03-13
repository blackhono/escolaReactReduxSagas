/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { isEmail } from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { get } from 'lodash'

import { createUser } from '../../services/api'
import Loading from '../../components/Loading'
import * as actions from '../../storeRedux/modules/auth/actions'
import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled'

export default function Login(props) {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.auth.isLoading)
  const id = useSelector((state) => state.auth.user.id)
  const nameStored = useSelector((state) => state.auth.user.nome)
  const emailStored = useSelector((state) => state.auth.user.email)
  const prevPath = get(props, 'location.state.prevPath', '/')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    setName(nameStored)
    setEmail(emailStored)
  }, [id, nameStored, emailStored])

  const handleSubmitLogin = async (e) => {
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

    dispatch(actions.loginRequest({ email, password }))
  }

  const handleSubmitRegister = async (e) => {
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

    dispatch(actions.registerRequest({ name, email, password }))
  }

  const handleSubmitEdit = async (e) => {
    e.preventDefault()

    let formErrors = false
    if (name.length < 3 || name.length > 255) {
      formErrors = true
      toast.error('Nome deve ter entre 3 e 12 caracteres')
    }
    if (!isEmail(email)) {
      formErrors = true
      toast.error('Email invalido!')
    }
    dispatch(actions.editRequest({ id, name, email }))
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {id ? (
        <Container>
          <h1>Editar seus dados</h1>
        </Container>
      ) : (
        <>
          <Container>
            <h1>Login</h1>
          </Container>
          <Container>
            <Form onSubmit={handleSubmitLogin}>
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
              <button type='submit'>Logar</button>
            </Form>
          </Container>
          <Container>
            <h1>Register</h1>
          </Container>
        </>
      )}
      <Container>
        <Form onSubmit={id ? handleSubmitEdit : handleSubmitRegister}>
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
          {id ? (
            <button type='submit'>Alterar</button>
          ) : (
            <>
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
            </>
          )}
        </Form>
      </Container>
    </>
  )
}
