import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MapIcon from '@mui/icons-material/Map';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../../assets/oussama.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
          <img src={Logo }alt="mabench" className='logo' />
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
          <p className="title">List</p>
          <li><PersonOutlineIcon className='icon' /><span>Users</span></li>
          <li><MapIcon /><span>Zones</span></li>
          <li><AppSettingsAltIcon className='icon' /><span>Apparails</span></li>
          <li><DisplaySettingsIcon className='icon' /><span>Limits</span></li>
          <p className="title">User</p>
          <li><AccountBoxIcon className='icon' /><span>Profile</span></li>
          <li><LogoutIcon className='icon' /><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
