import React, { useState } from 'react'
import SCSideBar from './SideBar.styled'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink } from 'react-router-dom';

export default function SideBar({ setToggle, toggle }) {
   

    return (
        <SCSideBar>
            <NavLink  onClick={() => setToggle(!toggle)} to="/private" activeClassName="active" exact>
                <ShowChartIcon className="sidebar-icon" />
            </NavLink>
            
            <NavLink to="/private/feed" activeClassName="active" exact>
                <DashboardIcon className="sidebar-icon" />
            </NavLink>
            <NavLink to="/private/edit" activeClassName="active" exact>
                <SettingsIcon className="sidebar-icon" />
            </NavLink>
        </SCSideBar>
    )
}
