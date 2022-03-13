import React, { useState, useContext, Children } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Aluno from '../pages/Aluno'
import Alunos from '../pages/Alunos'
import Photos from '../pages/Photos'
import LoginRegister from '../pages/Login'
import Page404 from '../pages/page404'

import MyRoute from './MyRoute'
import VerifyLogginRoute from './VerifyLogginRoute'

function RoutesApp() {
  return (
    <Routes>
      <Route>
        <Route
          exact
          path='/'
          element={
            <MyRoute>
              <Alunos />
            </MyRoute>
          }
        />
        <Route
          exact
          path='/alunos'
          element={
            <MyRoute>
              <Alunos />
            </MyRoute>
          }
        />
        <Route
          exact
          path='/Aluno/:id/edit'
          element={
            <MyRoute>
              <Aluno />
            </MyRoute>
          }
        />
        <Route
          exact
          path='/Aluno/'
          element={
            <MyRoute>
              <Aluno />
            </MyRoute>
          }
        />
        <Route
          exact
          path='/photo/:id'
          element={
            <MyRoute>
              <Photos />
            </MyRoute>
          }
        />
      </Route>
      <Route exact path='/login' element={<LoginRegister />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default RoutesApp

/* import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MyRoute from './MyRoute'
import Login from '../pages/login'
import Page404 from '../pages/page404'

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='error' element={Page404} />
      <Route path='*' element={MyRoute} />
    </Routes>
  )
}
 */
