import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import ScrollTop from "@components/ScrollTop";
import Header from "@/components/Header2/Header";
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
  const navigate = useNavigate();
  const { authStore, userStore } = useStore();
  const handleClickLogout = () =>
    authStore.logout().then(() => navigate('/'));

  return (
    <div className="bg-body">
      <Header />
      <ScrollTop />
      <div className="hidden lg:block navbar-menu relative z-50">
        <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-20"></div>
        <nav className="fixed top-20 left-0 bottom-0 flex flex-col w-24 xl:w-64 pt-10 pb-3 bg-white shadow overflow-y-auto">
          <div>
            <ul>
              <SidebarItem icon={faHome} text="Dashboard" to="/dashboard" />
              <SidebarItem icon={faUser} text="My Profile" to="/users/me" />
              <SidebarItem icon={faBookmark} text="Saved Jobs" to="mock-savejobs" />
              <SidebarItem icon={faBook} text="Manage All Jobs" to="/manage-jobs" />
              <SidebarItem icon={faUsers} text="Manage Users" to="mock-manage-users" />
              <SidebarItem icon={faPlus} text="Add People & Businesses" to="mock-add-users" />
            </ul>
          </div>
          <div className="p-4">
            <button className="flex items-center justify-center w-full py-2 text-red-500 bg-red-100 rounded-lg hover:bg-red-200">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
              <span onClick={handleClickLogout} className="hidden xl:inline">Log Out</span>
            </button>
          </div>
        </nav>
      </div>
      <div className="lg:ml-24 xl:ml-64 mt-20" data-bucket="1">
        <div className="py-10 px-4 md:!px-10 relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, to }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:bg-themePrimary hover:!text-white relative mx-auto flex duration-300 ease-in-out gap-3 group items-center xl:w-full w-14 h-14 xl:h-auto xl:py-4 xl:px-7 mb-2 xl:justify-start justify-center text-gray-500 rounded-full xl:rounded-none ${isActive ? 'bg-themePrimary text-white' : 'text-gray-600'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <FontAwesomeIcon
            icon={icon}
            className={`w-5 h-5 ${isActive ? 'text-white' : ''}`}
          />
          <span className="hidden xl:ml-3 xl:inline">{text}</span>
        </>
      )}
    </NavLink>
  </li>
);

export default PrivateLayout;