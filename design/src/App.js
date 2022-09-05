import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Slidebar from './component/Slidebar/Slidebar';
import ProductsList from './component/admin/products/ProductsList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";


function App() {
  return (
    <div className='app-class'>
          
      <Slidebar/>
      <Dashboard/>
   </div>
  );
}

export default App;
