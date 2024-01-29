import React from 'react'
import Logo from './Logo'
import '../css/sidebar.css';
import Search from './Search';
import SideBarItem from './SideBarItem';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className="sidebar-upper">
                <Logo />
                <Search />
                <SideBarItem item={1} />
                <SideBarItem item={2} />
                <SideBarItem item={3} />
                <SideBarItem item={4} />
                <SideBarItem item={5} />
                <SideBarItem item={6} />
                <SideBarItem item={7} />
            </div>
            <div className="sidebar-lower">
                <SideBarItem item={8}/>
                <SideBarItem item={9}/>
                <SideBarItem item={10}/>
            </div>
        </div>
    )
}

export default Sidebar