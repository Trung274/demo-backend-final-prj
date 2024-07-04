import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store'
import logo from '../../assets/svg/Logo.svg';
import LoginDialog from '../LoginDialog';
import DropdownUser from './DropdownUser';

const LoggedOutView = ({ sidebarOpen, toggleSidebar, currentUser }: { sidebarOpen: boolean, toggleSidebar: () => void, currentUser: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
    return (
        <header className="shadow-sm bg-white">
            <nav className="container py-2.5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a className="hidden sm:flex" href="/">
                            <div>
                                <span>
                                    <img src={logo} alt="Logo" aria-hidden="true" />
                                </span>
                            </div>
                        </a>
                        <a className="sm:hidden flex" href="/">
                            <div>
                                <span>
                                    <img src={logo} alt="Logo" aria-hidden="true" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div>
                        <ul className="bg-white w-full z-50 menu-open md:space-x-8 space-x-6 font-semibold hidden lg:flex">
                            <li className="ml-6 xl:ml-0 xl:mb-0">
                                <NavLink to={'/'} className={(navData) => navData.isActive ? 'text-themePrimary text-xs font-medium transition-all hover:text-themePrimary' : 'text-arsenic text-xs font-medium transition-all hover:text-themePrimary'}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="ml-6 xl:ml-0 xl:mb-0">
                                <NavLink to="/jobs" className={(navData) => navData.isActive ? 'text-themePrimary text-xs font-medium transition-all hover:text-themePrimary' : 'text-arsenic text-xs font-medium transition-all hover:text-themePrimary'}>
                                    Find Jobs
                                </NavLink >
                            </li>
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/businesses">Businesses</a></li>
                            <li className="ml-6 xl:ml-0 xl:mb-0">
                                <a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/candidates">Candidates</a>
                            </li>
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        {currentUser ? (
                             <DropdownUser />
                        ) : (
                            <ul className="flex py-2">
                                <li className="">
                                    <button className="block bg-[#333] text-white px-3 py-3 text-xs font-medium rounded-md hover:!bg-themePrimary transition-all outline-none" onClick={handleOpenModal}>Sign In</button>
                                </li>
                                <li className="ml-4">
                                    <button className="block bg-themePrimary text-white px-3 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none">Sign Up</button>
                                </li>
                                <li>
                                    <button onClick={toggleSidebar} className="mobile-toggle flex lg:hidden p-2 rounded-full transition-all outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        )}

                    </div>
                </div>
                <LoginDialog isOpen={isOpen} onClose={handleCloseModal} />
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="p-4">
                    <button onClick={toggleSidebar} className="float-right text-gray-600 hover:text-gray-800">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="mt-8 space-y-4">
                        <li><a className="text-arsenic text-sm font-medium transition-all hover:text-themePrimary" href="/">Home</a></li>
                        <li><a className="text-arsenic text-sm font-medium transition-all hover:text-themePrimary" href="/jobs">Find Jobs</a></li>
                        <li><a className="text-arsenic text-sm font-medium transition-all hover:text-themePrimary" href="/businesses">Businesses</a></li>
                        <li><a className="text-arsenic text-sm font-medium transition-all hover:text-themePrimary" href="/candidates">Candidates</a></li>
                        <li><a className="text-arsenic text-sm font-medium transition-all hover:text-themePrimary" href="/contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
            )}
        </header>
    );
};


const Header: React.FC = () => {
    const { userStore } = useStore();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <Observer>
            {() => (<LoggedOutView currentUser={userStore.currentUser} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />)}
        </Observer>
    );
}

export default Header;