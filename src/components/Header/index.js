import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Content, Profile } from './styles'
import Notifications from '~/components/Notifications'
import { signOut } from '~/store/modules/auth/actions'
import logo from '~/assets/logo.png'

function Header() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)
  function handleLogout() {
    dispatch(signOut())
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Meetup" />
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/dashboard">New Meetup</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Profile</Link>
            </div>
            <button onClick={handleLogout}>
              <span>Logout</span>
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}

export default Header
