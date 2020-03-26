import styled from 'styled-components'

export const BacklogWrapper = styled.div`
  margin: 1em;

  > * + * {
    margin-block-start: 1.5em;
  }
`
