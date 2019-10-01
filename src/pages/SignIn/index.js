import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import logo from '~/assets/logo.png'

export default function SignIn() {
  function handleSubmit(data) {}
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insert a valid email')
      .required('The email is required'),
    password: Yup.string().required('The password is required')
  })

  return (
    <>
      <img alt="Meetup" width="200" src={logo} />
      <Form schema={schema} autoComplete="no-complete" onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">SignIn</button>
        <Link to="/register">Register</Link>
      </Form>
    </>
  )
}
