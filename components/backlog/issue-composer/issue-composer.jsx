import React, { memo, useState } from 'react'
import AddIcon from '@material-ui/icons/Add'

import { ComposerWrapper, Button, ButtonLabel } from './issue-composer.styled'
import IssueForm from '../issue-form/issue-form'

const IssueComposer = memo(function IssueComposer({ handleIssueCreate }) {
  const [isCreatingIssue, setIsCreatingIssue] = useState(false)

  const handleIssueSubmit = (...args) => {
    handleIssueCreate(...args)
    setIsCreatingIssue(false)
  }

  return (
    <ComposerWrapper>
      {isCreatingIssue ? (
        <IssueForm handleIssueCreate={handleIssueSubmit} focusOnFirstField />
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
