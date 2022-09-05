import React from 'react';
import "./Dashboard.css";
import Header from '../Header/Header';
import Content from '../Content/Content';
import Experience from '../Experience/Experience';


import ProductsList from '../admin/products/ProductsList';

const Dashboard = () => {

    

    return (
        <div className='dashboard'>
           
            <Header />
            <Content />
            <Experience/>
        </div>

    )
}

export default Dashboard;
