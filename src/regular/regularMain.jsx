import React from 'react'
import { Route } from 'react-router'
import Mainpage from './pages/Mainpage'


export default function regularMain() {
    return (
        <div>
           <Route exact path="/" component={Mainpage}/>
        </div>
    )
}
