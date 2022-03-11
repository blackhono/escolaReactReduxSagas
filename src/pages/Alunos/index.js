/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import { get } from 'lodash'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

import { api, listAlunos } from '../../services/api'
import * as actions from '../../storeRedux/modules/loading/actions'

import { AlunosContainer, ProfilePicture } from './styled'
import { Container } from '../../styles/GlobalStyles'

import Loading from '../../components/Loading'

export default function Alunos() {
  const [alunos, setAlunos] = useState([])
  const selectorLoading = useSelector((state) => state.loading.isLoading)
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    ;(async () => {
      // setIsLoading(true)
      dispatch(actions.loadingRequest())
      const response = await listAlunos()
      setAlunos(response.data)
      dispatch(actions.loadingfinished())
      // setIsLoading(false)
    })()
  }, [dispatch])

  return (
    <>
      <Container>
        <h1>Alunos</h1>
        <Loading isLoading={selectorLoading} />
      </Container>
      <Container>
        <AlunosContainer>
          {/* <img src={alunos[0].Photos[0].url} alt='' /> */}
          {get(alunos, '[0]', false) ? (
            alunos.map((aluno) => (
              <div key={String(aluno.id)}>
                <ProfilePicture>
                  {get(aluno, 'Photos[0].url', false) ? (
                    <img src={aluno.Photos[0].url} alt='' />
                  ) : (
                    <FaUserCircle size={36} />
                  )}
                </ProfilePicture>
                <span>{aluno.nome}</span>
                <span>{aluno.email}</span>
                <Link to={`/aluno/${aluno.id}/edit`}>
                  <FaEdit size={16} />
                </Link>
                <FaWindowClose size={16} />
              </div>
            ))
          ) : (
            <div />
          )}
        </AlunosContainer>
      </Container>
    </>
  )
}
