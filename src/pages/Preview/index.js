import React, { useEffect, useState } from 'react'
import Breadcumb from '~/components/Breadcumb'
import { MdBookmark } from 'react-icons/md'
import history from '~/services/history'
import { toast } from 'react-toastify'

import api from '~/services/api'

import {
  Container,
  Meetup,
  Image,
  Content,
  Title,
  Local,
  Description,
  Subscriptions,
  Subscription,
  Name,
  Email
} from './styles'

export default function Preview({ match }) {
  const [banner, setBanner] = useState({})
  const [meetup, setMeetup] = useState({})

  useEffect(() => {
    async function loadMeetup() {
      await api
        .get(`/organizers/meetup/${match.params.meetup_id}`)
        .then(meetup => {
          setMeetup(meetup.data)
          setBanner(meetup.data.banner)
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
      <Meetup>
        <Image background={banner.url}></Image>
        <Content>
          <Title>{meetup.title}</Title>
          <Local>{meetup.location}</Local>
          <Description>{meetup.description}</Description>
          <Subscriptions>
            <Subscription>
              <Name>nome</Name>
              <Email>email</Email>
            </Subscription>
          </Subscriptions>
        </Content>
      </Meetup>
    </Container>
  )
}
