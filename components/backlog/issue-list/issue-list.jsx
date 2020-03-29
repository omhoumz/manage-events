import React, { memo } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import {
  IssuesWrapper,
  IssueItem,
  IssueCreatedTime,
  IssueLabel,
  IssueMeta,
} from './issue-list.styled'
import IconButton from '../../ui/icon-button/icon-button'
import { grey500 } from '../../ui/theme/colors'

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
          <IssueMeta>
            <IconButton color={grey500}>
              <AccountCircleIcon color='inherit' />
            </IconButton>
            <IssueCreatedTime>
              {new Intl.DateTimeFormat('en-EN', options).format(created)}
            </IssueCreatedTime>
          </IssueMeta>
        </IssueItem>
      ))}
    </IssuesWrapper>
  )
})

export default IssueList
