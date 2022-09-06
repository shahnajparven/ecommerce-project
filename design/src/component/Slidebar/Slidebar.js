import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Slidebar.css";
import { TreeView, TreeItem } from "@mui/lab";
import { BrowserRouter, NavLink, Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AddIcon from "@mui/icons-material/Add";
const Slidebar = () => {

    return (


        <div className='slidebar'>
            <div className='left-dashboard'>

                <Link to="/route/Routett">
                    <p>
                        <DashboardIcon /> <span>Dashboard</span>
                    </p>
                </Link>
                <Link to="/">
                    <p><HomeIcon /><span>Home</span></p>
                </Link>
<p>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ImportExportIcon />}
                >
                    <TreeItem nodeId="1" label="Products">
                        <Link to="/admin/product/ProductList">
                            <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
                        </Link>

                        <Link to="/admin/product/CreateProduct">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
                </p>
                <p>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ImportExportIcon />}
                >
                    <TreeItem nodeId="1" label="Users">
                        <Link to="/admin/user/UserList">
                            <TreeItem nodeId="2" label="All" icon={<PeopleIcon />} />
                        </Link>

                        <Link to="UserList">
                            <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
                        </Link>
                    </TreeItem>
                </TreeView>
                </p>

                <Link to="/">
                    <p><LogoutIcon/><span>Logout</span></p>
                </Link>
            </div>
        </div>

    )
}

export default Slidebar;
