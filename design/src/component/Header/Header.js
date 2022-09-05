import React from 'react';
import './Header.css';
import pic3 from '../imgs/pic3.jpg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink,Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import ProductsList from '../admin/products/ProductsList';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <>
        <Router>
       
        <Switch>
          <Route extact path='/admin/product/ProductList' component={ProductsList} />
        </Switch>
        </Router>

        <div className='header'>
            <div className='account'>
               <img src={pic3} alt="profile" />
                <span style={{color:"black", fontWeight:"bold"}}>Shahnaj Parven<br />
                <span style={{color:"gray",fontSize: "15px"}}>  admin
                </span>  </span>
            </div>
            <div className='search-area'>
                <input type="text" placeholder='Search here..' />
                <span><SearchIcon/></span>
                {/* <button className='s-button' type='submit'>Search</button> */}
            </div>
        </div>
        </>
    )
}

export default Header;
