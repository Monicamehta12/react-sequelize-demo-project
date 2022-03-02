import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className='sidebar collapse collapse-horizontal h-100' id='collapseWidthExample'>
                <nav className="nav flex-column h-100 p-3 fs-5">
                    <Link to='/user/dashboard' className="nav-link text-light"><i className="uil uil-dashboard me-2"></i>Dashboard</Link>
                    <Link to='/user/Viewproject' className="nav-link text-light"><i className="uil uil-apps me-2"></i>Projects</Link>
                    <Link to='/user/Addproject' className="nav-link text-light"><i className="uil uil-create-dashboard me-2"></i>Add Project</Link>
                </nav>
            </div>
            <div className='sidebar d-none d-md-block'>
                <nav className="nav flex-column h-100 p-3 fs-5">
                    <Link to='/user/dashboard' className="nav-link text-light"><i className="uil uil-dashboard me-2"></i>Dashboard</Link>
                    <Link to='/user/Viewproject' className="nav-link text-light"><i className="uil uil-apps me-2"></i>Projects</Link>
                    <Link to='/user/Addproject' className="nav-link text-light"><i className="uil uil-create-dashboard me-2"></i>Add Project</Link>
                </nav>
            </div>
        </>

    )
}

export default Sidebar
