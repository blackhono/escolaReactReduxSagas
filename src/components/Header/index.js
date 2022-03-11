import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'

import { Nav } from './styled'

export default function Header() {
  return (
    <Nav>
      <Link to='/'>
        Home <FaHome size={24} />
      </Link>
      <Link to='/register'>
        Faça Login <FaUserAlt size={24} />
      </Link>
      <Link to='/login'>
        Faça Logout <FaSignInAlt size={24} />
      </Link>
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
