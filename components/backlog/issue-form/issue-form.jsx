import React, { memo, useState } from 'react'

import { FormStyled, IssueLabelField } from './issue-form.styled'

const IssueForm = memo(function IssueForm({
  handleIssueCreate,
  handleCancel,
  focusOnFirstField,
}) {
  const [label, setLabel] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!label) return
    handleIssueCreate({ label })
    setLabel('')
  }

  const handleChange = e => setLabel(e.currentTarget.value)

  const handlekeyDown = e => {
    if (e.keyCode === 27 || e.key === 'Escape') {
      if (typeof handleCancel === 'function') {
        setLabel('')
        handleCancel()
      }
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <IssueLabelField
        value={label}
        onChange={handleChange}
        onKeyDown={handlekeyDown}
        placeholder='Issue Summary'
        autoFocus={focusOnFirstField}
      />
    </FormStyled>
  )
})

export default IssueForm
