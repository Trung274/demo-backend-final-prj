import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ClickOutside from '../ClickOutside';
import UserOne from '@assets/img/avatar.png';
import { useStore } from '@/store';
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTachometerAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faUser, faTachometerAlt, faCog, faSignOutAlt);

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { authStore, userStore } = useStore();
    const handleClickLogout = () =>
        authStore.logout().then(() => navigate('/'));

    const userName = userStore.currentUser?.profile.name || 'User';

    return (
        <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
            <NavLink
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                to="#"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">
                        {userName}
                    </span>
                    <span className="block text-xs leading-4">{userStore.currentUser?.profile.name}</span>
                </span>

                <span className="h-12 w-12 rounded-full">
                    <img src={UserOne} alt="User" />
                </span>

                <svg
                    className="hidden fill-current sm:block"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                        fill=""
                    />
                </svg>
            </NavLink>

            {/* <!-- Dropdown Start --> */}
            {dropdownOpen && (
                <div
                    className={`z-[99999] absolute right-0 mt-[.5rem] flex w-[16rem] flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
                >
                    <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7 dark:border-strokedark">
                        <li>
                            <NavLink
                                to="/users/me"
                                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                            >
                                <FontAwesomeIcon icon={faUser} style={{color: '#01b04f'}} />
                                My Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                            >
                                <FontAwesomeIcon icon={faTachometerAlt} style={{color: '#01b04f'}} />
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                            >
                                <FontAwesomeIcon icon={faCog} style={{color: '#01b04f'}} />
                                Account Settings
                            </NavLink>
                        </li>
                    </ul>
                    <Button
                        size="sm"
                        variant='ghost'
                        onClick={handleClickLogout}
                        className='ghost-button-with-icon'
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} style={{color: '#01b04f'}} />
                        Log Out
                    </Button>                    
                </div>
            )}
            {/* <!-- Dropdown End --> */}
        </ClickOutside>
    );
};

export default DropdownUser;