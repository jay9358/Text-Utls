import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
  
    <nav className={`navbar sticky-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} gilory`}>
      <div className="container-fluid">
        <a className="navbar-brand " href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className='btn btn-primary mx-2' onClick={props.darkmode}>{props.enable}</button>
        <div className="collapse navbar-collapse center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Pricing</a>
            </li>

          </ul>
      
        </div>
        
      </div>

     </nav>
    
  )
}

Navbar.defaultProps={
    title   :'React here',
}
Navbar.prototype={
 title:PropTypes.string,
    
}
