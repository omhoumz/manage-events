import React, { memo, useState, useEffect } from 'react'

import IssueComposer from '../../components/backlog/issue-composer/issue-composer'
import { BacklogWrapper } from './backlog.styled'
import IssueList from '../../components/backlog/issue-list/issue-list'

const Backlog = memo(function Backlog() {
  const [issues, setIssues] = useState([])
  const [lastId, setLastId] = useState(0)

  useEffect(() => {
    setIssues([
      { label: 'Implement latest changes', id: 323 },
      { label: 'Send feedback emails', id: 324 },
    ])
    setLastId(324)
  }, [])

  const addIssue = ({ label }) => {
    const newLastId = Number(lastId) + 1
    const newIssue = { label, id: newLastId }

    setIssues(oldIssues => [...oldIssues, { ...newIssue }])
    setLastId(newLastId)
  }

  return (
    <BacklogWrapper>
      <IssueList issues={issues} />
      <IssueComposer handleIssueCreate={addIssue} />
    </BacklogWrapper>
  )
})

export default Backlog
