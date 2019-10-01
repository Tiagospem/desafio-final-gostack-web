import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.png'

export default function SignUp() {
  return (
    <>
      <img alt="Meetup" width="200" src={logo} />
      <form autoComplete="off">
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  )
}
