import React, { memo } from 'react'

import {
  IssuesWrapper,
  IssueItem,
  IssueCreatedTime,
  IssueLabel,
} from './issue-list.styled'

const options = {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}

const IssueList = memo(function IssueList({ issues }) {
  return (
    <IssuesWrapper>
      {issues.map(({ label, id, created }) => (
        <IssueItem key={String(id)}>
          <IssueLabel>{label}</IssueLabel>
          <IssueCreatedTime>
            {new Intl.DateTimeFormat('en-EN', options).format(created)}
          </IssueCreatedTime>
        </IssueItem>
      ))}
    </IssuesWrapper>
  )
})

export default IssueList
