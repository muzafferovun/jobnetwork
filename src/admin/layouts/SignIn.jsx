import React from 'react'
import { MenuItem,Menu, Image, Dropdown } from 'semantic-ui-react'

export default function SignIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/83140937?v=4"></Image>
                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text="Çıkış" icon="sign-out" onClick={props.signOut} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
