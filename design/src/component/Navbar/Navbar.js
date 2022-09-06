import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink,Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
       
        <div className='logo-name'>
        <Link to='/'> 
        <p>
          <ShoppingCartIcon />
          <span>Shop_BD</span>
          </p>
          </Link> 
        </div>
        <button className='dash'>
            <Link to='/route/Routett'> 
              Admin
        </Link>      
        </button>
        {/* <button className='p'>
            <Link to='Productdetails'> 
              details
        </Link>      
        </button> */}
        <div className='login'>
            <Link to='/admin/authentication/LoginSignup'> 
        <PeopleIcon />
        </Link>   
         
        </div>

    </div>
    </>
  )
}

export default Navbar
