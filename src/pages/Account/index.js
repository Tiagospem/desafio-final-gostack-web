import React from 'react'
import { MdLock } from 'react-icons/md'
import Breadcumb from '~/components/Breadcumb'
import { Container } from './styles'

export default function Account() {
  return (
    <Container>
      <Breadcumb
        title="Account"
        subtitle="You can update your credentials here"
        icon={<MdLock />}
      />
    </Container>
  )
}
