import React, { Component } from 'react'
import  {Route, Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export default class Contact extends Component {
    
  render() {
    return (
      <div>
          <Link to ="/Contact/Contact1"> Contact1</Link>
          <Link to ="/Contact/Contact2"> Contact2</Link>
          <Outlet />
          
      </div>
    )
  }
}

