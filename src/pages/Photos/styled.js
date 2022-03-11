import styled from 'styled-components'

export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'green')};
`

// exemplos:
/*
export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'blue')};
`
 */

/*
export const Title = styled.h1`
  background-color: ${(props) => (props.isRed ? 'red' : 'blue')};
  small {
    color: ${(props) => (props.isRed ? 'blue' : 'red')};
    font-size: 20px;
  }
`
 */
