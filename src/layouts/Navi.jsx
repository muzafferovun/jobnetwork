import React,{useState} from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Dropdown, Menu,Container, Header } from 'semantic-ui-react'

import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    function handleSignOut(params){
        setIsAuthenticated(false);
    }
    const history=useHistory()
    function handleSignIn(params){
        setIsAuthenticated(true);
        history.push("/")
    }
    return (
        <div>
            <Menu inverted fixed>
                <Container>
                <Menu.Item 
                    name='home' as={NavLink} to="/"
               />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                     {isAuthenticated?<SignIn signOut={handleSignOut}/>: <SignOut  signIn={handleSignIn}/>}
                   
                    
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}