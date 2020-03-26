import React, { memo, useState } from 'react'

import { FormStyled, IssueLabelField } from './issue-form.styled'

const IssueForm = memo(function IssueForm({
  handleIssueCreate,
  focusOnFirstField,
}) {
  const [label, setLabel] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!label) return
    handleIssueCreate({ label })
    setLabel('')
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <IssueLabelField
        value={label}
        onChange={e => setLabel(e.currentTarget.value)}
        placeholder='Issue Summary'
        autoFocus={focusOnFirstField}
      />
    </FormStyled>
  )
})

export default IssueForm
