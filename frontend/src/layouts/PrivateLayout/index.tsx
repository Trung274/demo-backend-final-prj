import React from "react"
import { Outlet } from "react-router-dom"
import ScrollTop from "@components/ScrollTop";
import Header from "@/components/Header/Header";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faBookmark, faBook,
  faPlus, faBuilding, faUser, faSignOutAlt
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
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <nav className="w-24 xl:w-64 bg-white shadow-lg">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <ul className="mt-6 space-y-2">
                <SidebarItem icon={faHome} text="Dashboard" to="/" />
                <SidebarItem icon={faBookmark} text="Save Jobs" to="/jobs/saved" />
                <SidebarItem icon={faBook} text="Manages Jobs" to="/job/manages-jobs" />
                <SidebarItem icon={faBuilding} text="Businesses" to="/company/manages-businesses" />
                <SidebarItem icon={faPlus} text="Add Company" to="/company/add-company" />
                <SidebarItem icon={faUser} text="My Profile" to="/users/me" />
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
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to }) => (
  <li>
    <Link
      to={to}
      className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100"
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <span className="hidden xl:ml-3 xl:inline">{text}</span>
    </Link>
  </li>
);

export default PrivateLayout;