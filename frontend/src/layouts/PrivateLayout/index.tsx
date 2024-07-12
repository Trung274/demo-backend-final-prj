import React from "react"
import { Outlet } from "react-router-dom"
import ScrollTop from "@components/ScrollTop";
import Header from "@/components/Header/Header";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faBookmark, faBook,
  faPlus, faUsers, faUser, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { useStore } from "@/store";

interface SidebarItemProps {
  icon: IconDefinition;
  text: string;
  to: string;
}

const PrivateLayout = () => {
  const { userStore } = useStore();
  
  return (
    <div>
      <Header />
      <ScrollTop />
      <div className="flex h-fit bg-gray-100">
        {/* Sidebar */}
        <nav className=" w-24 xl:w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <ul className="mt-6 space-y-2">
                <SidebarItem icon={faHome} text="Dashboard" to="/dashboard" />
                <SidebarItem icon={faUser} text="My Profile" to="/users/me" />
                <SidebarItem icon={faBookmark} text="Saved Jobs" to="mock-savejobs" />
                <SidebarItem icon={faBook} text="Manage Jobs" to="mock-manage-jobs" />
                <SidebarItem icon={faUsers} text="Manage Users" to="mock-manage-users" />
                <SidebarItem icon={faPlus} text="Add People & Businesses" to="mock-add-users" />
              </ul>
            </div>
            <div className="p-4">
              <button className="flex items-center justify-center w-full py-2 text-red-500 bg-red-100 rounded-lg hover:bg-red-200">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                <span className="hidden xl:inline">Log Out</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Main content area */}
          <Outlet />
      </div>
    </div>
  );
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 rounded-lg hover:bg-gray-100 ${
          isActive ? 'text-themePrimary' : 'text-gray-600'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <FontAwesomeIcon 
            icon={icon} 
            className={`w-5 h-5 ${isActive ? 'text-themePrimary' : ''}`} 
          />
          <span className="hidden xl:ml-3 xl:inline">{text}</span>
        </>
      )}
    </NavLink>
  </li>
);

export default PrivateLayout;