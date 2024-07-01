import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store'
import Modal from '../Model';
import logo from '../../assets/svg/Logo.svg';

const LoggedOutView = ({ sidebarOpen, toggleSidebar }: { sidebarOpen: boolean, toggleSidebar: () => void }) => {
    const [open, setOpen] = useState(false);
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
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-themePrimary text-xs font-medium transition-all hover:text-themePrimary" href="/">Home</a></li>
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/jobs">Find Jobs</a></li>
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/businesses">Businesses</a></li>
                            <li className="ml-6 xl:ml-0 xl:mb-0">
                                <a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/candidates">Candidates</a>
                            </li>
                            <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs font-medium transition-all hover:text-themePrimary" href="/contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex py-2">
                            <li className="">
                                <button className="block bg-[#333] text-white px-3 py-3 text-xs font-medium rounded-md hover:!bg-themePrimary transition-all outline-none" onClick={() => setOpen(true)}>Sign In</button>
                            </li>
                            <li className="ml-4 hidden md:block">
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
                    </div>
                </div>
            </nav>
            
            {/* Modal Overlay */}
            <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="text-center w-56">
                        <div className="mx-auto my-4 w-48">
                            <h3 className="text-lg font-black text-gray-800">Confirm to Continue</h3>
                            <p className="text-sm text-gray-500">Are you sure to Continue</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="btn btn-success w-full">Continue</button>
                            <button onClick={() => setOpen(false)} className="btn btn-light w-full">Cancel</button>
                        </div>
                    </div>
                </Modal>

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
                    <div className="mt-8 space-y-2">
                        <button className="w-full bg-[#333] text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-themePrimary transition-all outline-none">Sign In</button>
                        <button className="w-full bg-themePrimary text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-black transition-all outline-none">Sign Up</button>
                    </div>
                </div>
            </div>
            
            {/* Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
            )}
        </header>
    );
};

const LoggedInView = ({ currentUser }: { currentUser: any }) => {
    return (
        <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/editor" className="nav-link">
                    <i className="ion-compose" />&nbsp;New Post
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/settings" className="nav-link">
                    <i className="ion-gear-a" />&nbsp;Settings
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={`/@${currentUser.username}`}
                    className="nav-link"
                >
                    <img src={currentUser.image} className="user-pic" alt="" />
                    {currentUser.username}
                </Link>
            </li>
        </ul>
    );
};

const Header: React.FC = () => {
    const { commonStore, userStore } = useStore();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Observer>
            {() => (
                <>
                    {userStore.currentUser ? (
                        <nav className="navbar navbar-light">
                            <div className="container">
                                <Link to="/" className="navbar-brand">
                                    {commonStore.appName.toLowerCase()}
                                </Link>
                                <LoggedInView currentUser={userStore.currentUser} />
                            </div>
                        </nav>
                    ) : (
                        <LoggedOutView sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                    )}
                </>
            )}
        </Observer>
    );
}

export default Header;