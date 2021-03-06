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

export const createUser = async ({ name, email, password }) => {
  const body = { nome: name, email, password }
  const retorno = await api.post('/users', body)
  return retorno
}

// Put

export const editUser = async ({ id, name, email, password }) => {
  const body = {
    nome: name,
    email,
    password: password || undefined,
  }

  const retorno = await api.put(`/users/${id}`, body)
  return retorno
}

/// /////////////////////////////////// Alunos /////////////////////////////////////////////////////

export const listAlunos = async () => {
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
