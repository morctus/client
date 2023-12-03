import React, { useState } from 'react'
import '../layout.css'
import {Link, useLocation} from "react-router-dom"

function Layout({ children }) {

  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const userMenu = [

    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line'
    },
    {
      name: 'About',
      link: '/about',
      icon: 'ri-chat-1-line'
    },
    {
      name: 'Appointments',
      link: '/appointments',
      icon: 'ri-file-list-line'
    },
    {
      name: 'Apply Groomer',
      link: '/apply-groomer',
      icon: 'ri-heart-add-line'
    },
    {
      name: 'Profile',
      link: '/profile',
      icon: 'ri-user-2-line'
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: 'ri-message-2-line'
    },
    {
      name: 'Logout',
      link: '/logout',
      icon: 'ri-logout-box-r-line'
    } 
  ];

  const menuToBeRendered = userMenu

  return (
    <div className='main'>
        <div className='d-flex layout'>
            <div className='sidebar'>
              <div className='sidebar-header'>
                <div className='logo'>
                </div>
                <h1>MF</h1>
              </div>
              <div className='menu'>
                {menuToBeRendered.map((menu) => {
                  const isActive = location.pathname === menu.path
                  return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                    <i className={menu.icon}></i>
                    {!collapsed && <Link to={menu.link}>{menu.name}</Link>}
                  </div>
                })}
              </div>
            </div>
            <div className='content'>
                <div className='header'>
                  {collapsed ? 
                    <i 
                      className="ri-menu-fill header-action-icon" 
                      onClick={() => setCollapsed(false)}
                    ></i>
                   : 
                    <i 
                      className="ri-close-circle-line header-action-icon" 
                      onClick={() => setCollapsed(true)}
                    ></i>
                  }

                  <div className='d-flex'>
                      <i className="ri-notification-3-line header-action-icon"></i>
                  </div>
                </div>
                <div className='body'>
                  {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout