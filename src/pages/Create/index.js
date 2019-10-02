import React, { useState } from 'react'
import * as Yup from 'yup'
import { Form, Input, Textarea } from '@rocketseat/unform'
import { MdAddBox } from 'react-icons/md'
import Breadcumb from '~/components/Breadcumb'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Container, Button } from './styles'

const schema = Yup.object().shape({
  title: Yup.string().required('The title is required'),
  location: Yup.string().required('The location is required'),
  date: Yup.date().required('The date is required'),
  description: Yup.string()
    .min(100, 'The description requires min 100 characters')
    .required('The password is required')
})

export default function Create() {
  const [startDate, setStartDate] = useState(new Date())
  function handleSubmit(data) {
    console.tron.log(data)
  }

  return (
    <Container>
      <Breadcumb
        title="Create New"
        subtitle="You can create new meetings here"
        icon={<MdAddBox />}
      />

      <Form schema={schema} autoComplete="no-complete" onSubmit={handleSubmit}>
        <Input name="title" type="string" placeholder="Title" />
        <Input name="location" type="string" placeholder="Location" />
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          timeFormat="p"
          minDate={new Date()}
          timeIntervals={15}
          dateFormat="yyyy-M-dd h:mm"
        />
        <Input name="date" type="hidden" value={startDate} />
        <Textarea
          name="description"
          placeholder="Please enter the description of your meeting"
        ></Textarea>
        <Button type="submit">Create</Button>
      </Form>
    </Container>
  )
}
