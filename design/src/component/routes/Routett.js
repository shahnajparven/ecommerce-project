
//import './App.css';
import Dashboard from '../dashboard/Dashboard';
import Slidebar from '../Slidebar/Slidebar';
//import ProductsList from './component/admin/products/ProductsList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";


const Routett = () => {
  return (
    <div className='app-class'>
          
      <Slidebar/>
      <Dashboard/>
   </div>
  );
}

export default Routett;














