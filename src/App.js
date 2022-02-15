import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './cmp/Home';
import About from './cmp/About';
import Contact from './cmp/Contact';
import Contact1 from './cmp/Contact1';
import Contact2 from './cmp/Contact2';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Link to= "/">Home</Link>
        <Link to= "/About"> About</Link>
        <Link to= "/Contact"> Contact</Link>
        <Link to= "/About/123"> iddddd</Link>
        
<Routes>
        <Route  path ="/" element ={<Home />} />
        
        <Route path ="/About" element ={<About />} />
        <Route path ="/About/:id" element ={<About />} />

        <Route path ="/Contact" element ={<Contact />}>
         
        <Route path ="Contact1" element ={<Contact1 />} />
        <Route path ="Contact2" element ={<Contact2 />} />
       
        </Route>
</Routes>
      </Router>
      </div>
    )
  }
}

