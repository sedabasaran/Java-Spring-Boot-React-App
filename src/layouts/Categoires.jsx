import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default function Categoires() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem
          name='Categories'
        />
        <MenuItem
          name='Brand'
        />
        <MenuItem
          name='Seller'
        />
      </Menu>
    </div>
  )
}
