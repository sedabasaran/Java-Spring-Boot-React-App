import React from 'react'
import {
  DropdownMenu,
  DropdownItem,
  Dropdown, Label,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CartSummary() {

  const { cartItems } = useSelector(state => state.cart)

  return (
    <div>
      <Dropdown item text='Cart'>
        <DropdownMenu>
          {cartItems.map((cartItems) => (
            <DropdownItem key={cartItems.product.id}>
              {cartItems.product.productName}
              <Label>
                {cartItems.quantity}
              </Label>
            </DropdownItem>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to='/cart'>Add to Cart</Dropdown.Item>
        </DropdownMenu>
      </Dropdown>

    </div>
  )
}
