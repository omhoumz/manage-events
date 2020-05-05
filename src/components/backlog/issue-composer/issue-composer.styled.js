import styled from 'styled-components'

import { blue100 } from '../../ui/theme/colors'

export const ComposerWrapper = styled.div``

export const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1em;

  padding: 0.4em;

  background-color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${blue100};
  }

  > * + * {
    margin-inline-start: 0.1em;
  }
`

export const ButtonLabel = styled.span``
