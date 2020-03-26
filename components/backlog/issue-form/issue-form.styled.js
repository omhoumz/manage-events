import styled from 'styled-components'

import { blue300, blue100 } from '../../ui/theme/colors'

export const FormStyled = styled.form``

export const IssueLabelField = styled.input.attrs({
  type: 'text',
})`
  padding: 0.4em 0.6em;
  font-size: 1em;
  width: 100%;

  border-radius: 4px;
  border: 1px solid;
  border-color: ${blue100};

  transition: 110ms ease;
  transition-property: border;

  :hover,
  :focus {
    border-color: ${blue300};
  }
`
