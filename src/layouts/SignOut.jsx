import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <div>
                    <Button onClick={signIn} primary content='Login ' />
                    <Button primary content='Sign Out' />
                </div>
            </Menu.Item>

        </div>
    )
}
