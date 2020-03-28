import React, { memo, useState } from 'react'
import dynamic from 'next/dynamic'
import AddIcon from '@material-ui/icons/Add'

import { ComposerWrapper, Button, ButtonLabel } from './issue-composer.styled'
const IssueForm = dynamic(() => import('../issue-form/issue-form'))

const IssueComposer = memo(function IssueComposer({ handleIssueCreate }) {
  const [isCreatingIssue, setIsCreatingIssue] = useState(false)

  const handleIssueSubmit = (...args) => {
    handleIssueCreate(...args)
    setIsCreatingIssue(false)
  }

  const handleCancel = () => {
    setIsCreatingIssue(false)
  }

  return (
    <ComposerWrapper>
      {isCreatingIssue ? (
        <IssueForm
          handleIssueCreate={handleIssueSubmit}
          handleCancel={handleCancel}
          focusOnFirstField
        />
      ) : (
        <Button onClick={() => setIsCreatingIssue(true)}>
          <AddIcon fontSize='small' />
          <ButtonLabel>Create issue</ButtonLabel>
        </Button>
      )}
    </ComposerWrapper>
  )
})

export default IssueComposer
