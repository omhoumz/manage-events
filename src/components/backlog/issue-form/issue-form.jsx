import React, { memo, useState } from 'react'

import { FormStyled, IssueLabelField } from './issue-form.styled'

const ESTIMATE_MAX = 9
const ESTIMATE_MIN = 1

const IssueForm = memo(function IssueForm({ handleIssueCreate, handleCancel }) {
  const [label, setLabel] = useState('')
  const [estimate, setEstimate] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    const isDataValid =
      label && estimate > ESTIMATE_MIN && estimate < ESTIMATE_MAX

    if (!isDataValid) return

    handleIssueCreate({ label, estimate })
    setLabel('')
  }

  const handleChange = (e) => setLabel(e.currentTarget.value)

  const handlekeyDown = (e) => {
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
        type='text'
      />
      <IssueLabelField
        value={estimate}
        type='number'
        onChange={(e) => setEstimate(e.currentTarget.value)}
        min={ESTIMATE_MIN}
        max={ESTIMATE_MAX}
        style={{ flexBasis: '20%' }}
      />
      <div style={{ display: 'none' }}>
        <button type='submit' />
      </div>
    </FormStyled>
  )
})

export default IssueForm
