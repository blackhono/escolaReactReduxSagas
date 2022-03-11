import axios from 'axios'

import { toast } from 'react-toastify'
import { get } from 'lodash'

export const api = axios.create({
  // baseURL: 'http://localhost:3001/',
  baseURL: 'https://escola.diegolepamar.com.br',
})

/// /////////////////////// USER /////////////////////////////

// Login

export const createSession = async ({ email, password }) => {
  const body = { email, password }
  const retorno = await api.post('/tokens', body)
  return retorno
}

// Create

export const createUser = async (nome, email, password) => {
  const body = { nome, email, password }
  try {
    const retorno = await api.post('/users', body)
    toast.success('Cadastro realizado com sucesso')
    return retorno
  } catch (err) {
    const errors = get(err, 'response.data.errors', [])
    errors.map((error) => toast.error(error))
  }
}

// Alunos

export const listAlunos = async (token) => {
  try {
    const retorno = await api.get('alunos')
    if (!retorno) {
      return
    }
    return retorno
  } catch (e) {
    return e
  }
}
