import React from 'react'
import { useField } from '@rocketseat/unform'

import { Container } from './styles'

export default function FileInput() {
  function handleChange() {}
  return (
    <Container>
      <Label>
        <img src="" />>
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={handleChange}
        />
      </Label>
    </Container>
  )
}
