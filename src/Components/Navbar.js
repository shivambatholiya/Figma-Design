import React from 'react'
import logo from './Images/logo.png'
import './CSS/Navbar.css'
import { Link } from "react-router-dom";

function Navbar({history}) {
  const getColor = (curr) => {
    // if(history.location.pathname===curr){
    //   return 'red'
    // }
  }
  return (
    <>
      <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li><Link to="/" style={{backgroundColor: getColor('/')}}>Home</Link></li>
            <li><Link to="/shop" style={{backgroundColor: getColor('/shop')}}>Shop</Link></li>
            <li><Link to="/faq" style={{backgroundColor: getColor('/faq')}}>Faq's</Link></li>
            <li><Link to="/stock" style={{backgroundColor: getColor('/stock')}}>Stockists</Link></li>
            <li><Link to="/wholesale" style={{backgroundColor: getColor('/wholesale')}}>Wholesale</Link></li>
            <li><Link to="/contact" style={{backgroundColor: getColor('/contact')}}>Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
