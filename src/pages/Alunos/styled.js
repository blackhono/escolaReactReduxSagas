import styled from 'styled-components'

export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'green')};
`

export const AlunosContainer = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #363636;
  }
`

export const ProfilePicture = styled.div`
  img {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }
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
