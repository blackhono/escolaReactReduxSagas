import styled from 'styled-components'
import { primaryColor, msgColor } from '../../config/colors'

export const Nav = styled.nav`
  background: ${msgColor.infoColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: bold;
    margin: 0 10px;
    color: ${primaryColor};
  }
`
