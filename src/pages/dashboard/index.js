import React, { useEffect, useState } from 'react'
import history from '~/services/history'
import { format, parseISO } from 'date-fns'
import Breadcumb from '~/components/Breadcumb'
import {
  MdEdit,
  MdDeleteForever,
  MdInfo,
  MdDashboard,
  MdPinDrop,
  MdToday
} from 'react-icons/md'
import {
  Container,
  List,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from './styles'
import api from '~/services/api'

export default function Dashboard() {
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await api.get('organizers')
      if (response.data) {
        const slice = response.data.map(m => {
          return {
            ...m,
            title: m.title.slice(0, 70),
            location: m.location.slice(0, 35),
            date: format(parseISO(m.date), 'MMM d, YYY - HH:mm')
          }
        })
        setMeetups(slice)
      }
    }
    loadData()
  })

  return (
    <Container>
      <Breadcumb
        title="Dashboard"
        subtitle="Your current meetings. You can preview, cancel and edit meetings"
        icon={<MdDashboard />}
      />
      <List>
        {meetups.map(m => (
          <Card key={m.id} past={m.past_meetup}>
            <CardHeader image={m.banner.url} />
            <CardBody>
              <div>
                <p>
                  <strong>{m.title}</strong>
                </p>
                <p>
                  <MdToday /> {m.date}
                </p>
                <p>
                  <MdPinDrop /> {m.location}
                </p>
              </div>
            </CardBody>
            <CardFooter past={m.past_meetup}>
              <button
                onClick={() => {
                  history.push(`/meetup/${m.id}`)
                }}
              >
                <MdInfo />
              </button>
              <button>
                <MdEdit />
              </button>
              {!m.past_meetup && (
                <button>
                  <MdDeleteForever />
                </button>
              )}
            </CardFooter>
          </Card>
        ))}
      </List>
    </Container>
  )
}
