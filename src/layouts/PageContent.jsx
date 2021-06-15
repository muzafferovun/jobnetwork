import React from 'react'
import Mainpage from '../pages/Mainpage'
import { Route } from 'react-router'
import { Container } from 'semantic-ui-react'
export default function PageContent() {
    return (
       
        <div>
           <Route exact path="/" component={Mainpage}/>
        </div>
        
    )
}
