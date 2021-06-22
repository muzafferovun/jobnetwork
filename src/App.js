import { Route } from 'react-router';
import AdminMainpage from './admin/AdminMainpage';
import './App.css';
import CompanyMainPage from './company/CompanyMainPage';
import PersonMainPage from './person/PersonMainPage';
import regularMain from './regular/regularMain';
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SchoolMain from './admin/moduls/school/SchoolMain';
function App() {
  
  useEffect(() => {
    document.title = "JobNetwork.org"
 }, []);
  return (
    <div className="App">
           <Route exact path="/" component={regularMain}/>
           <Route exact path="/admin/" component={AdminMainpage}/>
           <Route exact path="/company/" component={CompanyMainPage}/>
           <Route exact path="/person/" component={PersonMainPage}/>

    </div>
  );

}

export default App;
