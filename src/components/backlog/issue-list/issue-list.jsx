import React, { memo } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import DeleteIcon from '@material-ui/icons/Delete'

import {
  IssuesWrapper,
  IssueItem,
  IssueCreatedTime,
  IssueLabel,
  IssueEstimate,
  IssueData,
} from './issue-list.styled'
import IconButton from '../../ui/icon-button/icon-button'
import { grey500 } from '../../ui/theme/colors'

const options = {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
}

const IssueList = memo(function IssueList({ issues, deleteIssue }) {
  if (!issues) return null

  return (
    <IssuesWrapper>
      {issues.map(({ label, id, timestamp, estimate }) => (
        <IssueItem key={String(id)}>
          <IssueData gap='0.3em'>
            <IssueEstimate>{`${estimate} d`}</IssueEstimate>
            <IssueLabel>{label}</IssueLabel>
          </IssueData>
          <IssueData gap='0.8em'>
            <IconButton color={grey500} onClick={() => deleteIssue(id)}>
              <DeleteIcon color='inherit' />
            </IconButton>
            <IconButton color={grey500}>
              <AccountCircleIcon color='inherit' />
            </IconButton>
            <IssueCreatedTime>
              {new Intl.DateTimeFormat('en-EN', options).format(timestamp)}
            </IssueCreatedTime>
          </IssueData>
        </IssueItem>
      ))}
    </IssuesWrapper>
  )
})

export default IssueList
