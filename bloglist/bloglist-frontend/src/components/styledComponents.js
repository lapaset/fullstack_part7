import styled from 'styled-components'

export const Button = styled.button`
  background: teal;
  font-size: 1em;
  color: white;
  margin: 0.25em;
  padding: 0.4em 1em;
  border: 2px solid Teal;
  border-radius: 3px;
  font-size: 0.8em;
`

export const LogoutButton = styled(Button)`
  font-size: 1.2em;
  margin-left: 1.5em;
`

export const Input = styled.input`
  margin: 0.25em 0em;
  width: 50%;
  padding: 0.25em;
  border: 0px solid;
  border-radius: 5px;
  font-size: 1em;
`

export const Page = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  padding: 2em;
  background: mistyrose;

  a {
    color: black;
    text-decoration: none;
  }
  
  a:hover {
    color: tomato;
    text-decoration: underline;
  }
`

export const NavBar = styled.div`
  width: 60%;
  background: indigo;
  padding: 1.5em;
  display: table;
  color: coral;

  a {
    color: coral;
    text-decoration: none;
  }
`

export const NavBarItem = styled.div`
  float: left;
  padding: 0.25em 1em;
`

export const NavBarLoginItem = styled.div`
  float: right;
  padding: 0em 1em;
  font-size: 0.6em;
`

export const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`

export const Table = styled.table`

  border-collapse: collapse;
  width: 70%;
  margin-top: 1em;

  tr, td {
      padding: 0.5em 5em 0.5em 0.5em;
      border-bottom: 1px solid #ddd;
      background-color: white;
    }
  thead td {
      font-weight: bold;
    }

`

/*

export const Button = styled.button`
  background: Teal;
  color: White;
  font-size 1em;
  padding: 0.5em 3em;
  border: 1px solid;
  border-radius: 5px
`

export const Page = styled.div`
  padding: 2em;
  background: BlanchedAlmond;
`

export const NavBar = styled.div`
  width: 99vw;
  background: thistle;
  position: absolute;
  left: 0.5;
  top: 0;
  display: table;
`

export const NavBarItem = styled.div`
  float: left;
  padding: 1em 2em;
`*/