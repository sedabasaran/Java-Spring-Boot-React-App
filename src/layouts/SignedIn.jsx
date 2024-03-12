import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1382786125752905734/WlpEv8Z__400x400.jpg" />
                <Dropdown pointing="top left" text='Inci'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Info" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign Out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div >
    )
}
