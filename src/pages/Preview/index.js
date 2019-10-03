import React, { useEffect, useState } from 'react'
import Breadcumb from '~/components/Breadcumb'
import { MdBookmark } from 'react-icons/md'
import history from '~/services/history'
import { toast } from 'react-toastify'

import api from '~/services/api'

import { Container } from './styles'

export default function Preview({ match }) {
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      await api
        .get(`/organizers/meetup/${match.params.meetup_id}`)
        .then(meetup => {
          setMeetup(meetup.data)
        })
        .catch(() => {
          toast.error('Meetup not found')
          history.push('/dashboard')
        })
    }
    loadMeetup()
  }, [match])

  return (
    <Container>
      <Breadcumb
        title="Preview"
        subtitle={meetup.title}
        icon={<MdBookmark />}
      />
    </Container>
  )
}
