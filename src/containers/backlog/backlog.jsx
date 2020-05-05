import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

import { GlobalStyles } from '../../components/ui/theme/global-styles.styled'
import IssueComposer from '../../components/backlog/issue-composer/issue-composer'
import { BacklogWrapper } from './backlog.styled'
import IssueList from '../../components/backlog/issue-list/issue-list'
import {
  useFirestoreCollectionData,
  useDeleteIssue,
  useAddIssue,
} from '../../components/firebase-provider/firebase-provider'

const Backlog = memo(function Backlog() {
  const [issues] = useFirestoreCollectionData((db) => {
    return db.collection('issues').orderBy('timestamp')
  }, [])

  const [deleteIssue] = useDeleteIssue()
  const [addIssue] = useAddIssue()

  return (
    <BacklogWrapper>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Roboto+Mono:wght@300;400&display=swap'
          rel='stylesheet'
        />
        <title key='title'>Backlog | Manage app</title>
      </Helmet>
      <GlobalStyles />
      <IssueList issues={issues} deleteIssue={deleteIssue} />
      <IssueComposer handleIssueCreate={addIssue} />
    </BacklogWrapper>
  )
})

export default Backlog
