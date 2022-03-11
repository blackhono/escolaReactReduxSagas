// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { api, createSession } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const recoveryUser = localStorage.getItem('user')
    if (recoveryUser) {
      setUser(JSON.parse(recoveryUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password)
      const loggedUser = response.data.user
      const { token } = response.data
      localStorage.setItem('user', JSON.stringify(loggedUser))
      localStorage.setItem('token', JSON.stringify(token))

      api.defaults.headers.authotization = `Bearer ${token}`

      setUser(loggedUser)
      // navigate('/')

      toast.success(`Seja bem vindo ao site ${user.nome}`)
      return user
    } catch (err) {
      setUser(null)
      toast.error('Falha ao logar')
      return err
    }
  }

  const logout = () => {
    api.defaults.headers.authotization = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    navigate('/login')
  }
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
