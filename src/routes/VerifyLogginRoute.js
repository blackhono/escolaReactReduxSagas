import React from 'react'
import { Route, Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

export default function VerifyLogginRoute({ children }) {
  const location = useLocation()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  if (isLoggedIn) {
    return <Navigate to={{ pathname: '/' }} state={{ from: location }} />
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return children
}
