import styled from 'styled-components'

import { blue100, grey300, grey500, blue500 } from '../../ui/theme/colors'

export const IssuesWrapper = styled.div``

export const IssueItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em;

  white-space: nowrap;
  border-bottom: 1px solid ${grey300};
  background-color: transparent;

  :hover {
    background-color: ${blue100};
  }

  > * + * {
    margin-inline-start: 0.5em;
  }
`

export const IssueData = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${({ gap }) => gap || '0.5em'};
  }
`

export const IssueLabel = styled.div``

export const IssueCreatedTime = styled.div`
  color: ${grey500};
  font-size: 14px;
`

export const IssueEstimate = styled.div`
  display: flex;
  align-items: center;

  padding: 2px 6px;
  font-size: 12px;
  line-height: 1;

  border: 1px solid ${blue500};
  white-space: nowrap;

  border-radius: 40px;
  background-color: ${blue100};
  color: ${blue500};
`
