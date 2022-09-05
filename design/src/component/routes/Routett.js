import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import App from '../../App';
import LoginSignup from '../admin/authentication/LoginSignup';
import CreateProduct from '../admin/products/CreateProduct';
import ProductsList from '../admin/products/ProductsList';
import UpdateProduct from '../admin/products/UpdateProduct';
import UserList from '../admin/user/UserList';
import Banner from '../banner/Banner';
import Navbar from '../Navbar/Navbar';
import Pages from './Pages';
import './Routett.css';
import { useSelector } from "react-redux";
import UpdateUser from '../admin/user/UpdateUser';
import ProductDetails from '../admin/products/ProductDetails';


const Routett = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route extact path='/App' component={App} />
          <Route extact path='/admin/product/ProductList' component={ProductsList} />
          <Route extact path='/admin/product/UserList' component={UserList} />
          <Route extact path='/admin/product/CreateProduct' component={CreateProduct} />
          <Route extact path='/admin/authentication/LoginSignp' component={LoginSignup} />
          <Route extact path='/admin/product/:id' component={UpdateProduct} />
          <Route extact path='/admin/user/:id' component={UpdateUser} />
          {/* <Route extact path='/ProductDetails' component={ProductDetails} /> */}
          </Switch>
          {/* <Banner/> */}
      </Router>
    </div>
  )
}

export default Routett;
