import styled from 'styled-components'

import { blue100, grey300, grey500 } from '../../ui/theme/colors'

export const IssuesWrapper = styled.div``

export const IssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;

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
  color: ${grey500};
  font-size: 14px;
`

export const IssueMeta = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: 1em;
  }
`
