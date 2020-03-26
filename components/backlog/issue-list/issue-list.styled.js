import styled from 'styled-components'

import { blue100, blue500 } from '../../ui/theme/colors'

export const IssuesWrapper = styled.div`
  > * + * {
    margin-block-start: 0.3em;
  }
`

export const IssueItem = styled.div`
  display: flex;
  padding: 1em;

  border-radius: 4px;
  background-color: ${blue100};

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);

  :hover {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  }

  > * + * {
    margin-inline-start: 0.5em;
  }
`

export const IssueId = styled.div`
  color: ${blue500};
`
export const IssueLabel = styled.div``
