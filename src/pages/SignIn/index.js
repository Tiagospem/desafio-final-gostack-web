import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.png'

// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img alt="Meetup" width="200" src={logo} />
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Acessar</button>
        <Link to="/register">Criar conta</Link>
      </form>
    </>
  )
}
