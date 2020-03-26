import React, { memo } from 'react'

import {
  IssuesWrapper,
  IssueItem,
  IssueId,
  IssueLabel,
} from './issue-list.styled'

const IssueList = memo(function IssueList({ issues }) {
  return (
    <IssuesWrapper>
      {issues.map(({ label, id }) => (
        <IssueItem key={String(id)}>
          <IssueId>{id}</IssueId>
          <IssueLabel>{label}</IssueLabel>
        </IssueItem>
      ))}
    </IssuesWrapper>
  )
})

export default IssueList
