import React from 'react'
import { Link } from "react-router-dom"
import LoginHeader from './LoginHeader'
import { NavBar, NavBarItem, NavBarLoginItem } from './styledComponents'


const Header = ({ user }) => (
  <NavBar>
    <NavBarItem>
      <Link to="/">blogs</Link>
    </NavBarItem>
    <NavBarItem>
      <Link to="/users">users</Link>
    </NavBarItem>
    <NavBarLoginItem>
      <LoginHeader user={user} />
    </NavBarLoginItem>
  </NavBar>
)

export default Header