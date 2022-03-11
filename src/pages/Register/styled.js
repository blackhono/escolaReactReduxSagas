import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Title = styled.h1`
  background: ${(props) => (props.isRed ? 'red' : 'green')};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  input {
    height: 40px;
    font-size: 18px;
    padding: 0 10px;
    border-radius: 4px;

    &:focus {
      border: 1px solid ${colors.msgColor.infoColor};
    }
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
