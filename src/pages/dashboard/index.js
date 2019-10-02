import React from 'react'
import Breadcumb from '~/components/Breadcumb'
import { MdEdit, MdDeleteForever, MdInfo, MdDashboard } from 'react-icons/md'
import {
  Container,
  List,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from './styles'

export default function Dashboard() {
  return (
    <Container>
      <Breadcumb
        title="Dashboard"
        subtitle="Your current meetings. You can preview, cancel and edit meetings"
        icon={<MdDashboard />}
      />
      <List>
        <Card>
          <CardHeader image="https://www.fluentin3months.com/wp-content/uploads/2018/12/language-meetup.jpg" />
          <CardBody>
            Aqui vai o titulo do meet up não pode ser muito grande
          </CardBody>
          <CardFooter>
            <button>
              <MdInfo />
            </button>
            <button>
              <MdEdit />
            </button>
            <button>
              <MdDeleteForever />
            </button>
          </CardFooter>
        </Card>
      </List>
    </Container>
  )
}
