import styled from 'styled-components'

import { blue100, blue500, grey300 } from '../../ui/theme/colors'

export const IssuesWrapper = styled.div``

export const IssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;

  border-bottom: 1px solid ${grey300};
  background-color: transparent;

  :hover {
    background-color: ${blue100};
  }

  > * + * {
    margin-inline-start: 0.5em;
  }
`

export const IssueLabel = styled.div``

export const IssueCreatedTime = styled.div`
  color: ${blue500};
`
