import React, { memo, useState, useEffect } from 'react'

import IssueComposer from '../../components/backlog/issue-composer/issue-composer'
import { BacklogWrapper } from './backlog.styled'
import IssueList from '../../components/backlog/issue-list/issue-list'
import { loadDB } from '../../core/db/db'

let db = null
let issueDBCollection = null

;(async () => {
  db = await loadDB()
  issueDBCollection = db.firestore().collection('issues')
})()

const getRTIssues = updateFunc => {
  issueDBCollection.orderBy('timestamp').onSnapshot(querySnapshot => {
    const issues = []
    querySnapshot.forEach(function(doc) {
      if (doc && doc.exists) {
        const { label, timestamp } = doc.data()
        issues.push({
          id: doc.id,
          label,
          created: timestamp.toDate(),
        })
      }
    })
    updateFunc(issues)
  })
}

const Backlog = memo(function Backlog() {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    getRTIssues(setIssues)
  }, [])

  const addIssue = async ({ label }) => {
    const newIssue = {
      label,
      timestamp: db.firestore.FieldValue.serverTimestamp(),
    }

    issueDBCollection.add({ ...newIssue })
  }

  return (
    <BacklogWrapper>
      <IssueList issues={issues} />
      <IssueComposer handleIssueCreate={addIssue} />
    </BacklogWrapper>
  )
})

export default Backlog
