import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { useLogoutMutation } from '../../generated/graphql'

export const HeaderComponent: React.FC = () => {
  const [logOut, { data, error, loading }] = useLogoutMutation()
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Link href="/" passHref>
        <Navbar.Brand>TsShop</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/" passHref>
            <Nav.Link>Shop</Nav.Link>
          </Link>
          <Link href="/signup" passHref>
            <Nav.Link>Signup</Nav.Link>
          </Link>
          <Link href="/login" passHref>
            <Nav.Link>Login</Nav.Link>
          </Link>
          <Link href="/crud/admin" passHref>
            <Nav.Link>Admin</Nav.Link>
          </Link>
          <span
            style={{
              cursor: 'pointer',
            }}
            className="nav-link"
            onClick={() => logOut()}
          >
            Log Out
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
