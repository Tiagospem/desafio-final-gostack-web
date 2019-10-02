import React from 'react'
import { MdAddBox } from 'react-icons/md'
import Breadcumb from '~/components/Breadcumb'
import { Container } from './styles'

export default function Create() {
  return (
    <Container>
      <Breadcumb
        title="Create New"
        subtitle="You can create new meetings here"
        icon={<MdAddBox />}
      />
    </Container>
  )
}
