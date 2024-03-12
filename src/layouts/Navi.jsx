import CartSummarry from './CartSummary'
import {
  MenuMenu,
  Menu,
  Container,
} from 'semantic-ui-react'
import SignOut from './SignOut'
import SignedIn from './SignedIn'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Navi() {
  const { cartItems } = useSelector(state => state.cart)

  const [isAuthenticated, setiIsAuthenticated] = useState(true)
  const navigate = useNavigate()
  function handleSignOut() {
    setiIsAuthenticated(false)
    navigate('/')
  }

  function handleSignIn() {
    setiIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed >
        <Container>
          <Menu.Item
            name='home' />
          <Menu.Item
            name='messages' />

          <MenuMenu position='right'>
            {cartItems.length > 0 && <CartSummarry />}
            {isAuthenticated ? <SignedIn signOut={handleSignOut} bişey="1" /> : <SignOut signIn={handleSignIn} />}
          </MenuMenu>
        </Container>

      </Menu>
    </div>
  )
}
