import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Routett from './component/routes/Routett';
import LoginSignup from './component/admin/authentication/LoginSignup';
import CreateProduct from './component/admin/products/CreateProduct';
import ProductsList from './component/admin/products/ProductsList';

import UserList from './component/admin/users/UserList';
import UpdateProduct from './component/admin/products/UpdateProduct';
import UpdateUser from './component/admin/users/UpdateUser';
import Banner from './component/banner/Banner';
import Navbar from './component/Navbar/Navbar';
//import Pages from './Pages';
//import './Routett.css';
import { useSelector } from "react-redux";
import ProductDetails from './component/admin/products/ProductDetails';



  function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route extact path='/route/Routett' component={Routett} />
          <Route extact path='/admin/product/ProductList' component={ProductsList} />
          <Route extact path='/admin/user/UserList' component={UserList} />
          <Route extact path='/admin/product/CreateProduct' component={CreateProduct} />
          <Route extact path='/admin/authentication/LoginSignup' component={LoginSignup} />
          <Route extact path='/admin/product/UpdateProduct/:id' component={UpdateProduct} />
          <Route extact path='/admin/user/UpdateUser/:id' component={UpdateUser} />
          {/* <Route extact path='/ProductDetails' component={ProductDetails} /> */}
          </Switch>
          {/* <Banner/> */}
      </Router>
    </div>
  )
}

export default App;
