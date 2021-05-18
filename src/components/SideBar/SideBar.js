import React from 'react'
import SCSideBar from './SideBar.styled'
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';

export default function SideBar(props) {
    console.log(props);
    return (
        <SCSideBar>
            <ShowChartIcon className="sidebar-icon" />
            <DashboardIcon className="sidebar-icon" />
            <SettingsIcon className="sidebar-icon" />
        </SCSideBar>
    )
}
