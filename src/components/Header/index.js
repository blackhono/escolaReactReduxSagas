import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaUserAlt, FaEdit } from 'react-icons/fa'

import { useSelector } from 'react-redux'

import { Nav } from './styled'

export default function Header() {
  const id = useSelector((state) => state.auth.user.id)
  return (
    <Nav>
      <Link to='/'>
        <FaHome size={24} />
      </Link>
      {id ? (
        <>
          <Link to='/logout'>
            <FaSignInAlt size={24} />
          </Link>
          <Link to='/Login'>
            <FaEdit size={24} />
          </Link>
        </>
      ) : (
        <Link to='/Login'>
          <FaUserAlt size={24} />
        </Link>
      )}
    </Nav>
  )
}

/*
<a href='/a'>
        Faça Logout <FaSignInAlt size={24} />
      </a>
      <a href='a'>
        Faça Login <FaUserAlt size={24} />
      </a> */
