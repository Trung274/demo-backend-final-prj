import React from 'react';
import { Link } from 'react-router-dom';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store'

const LoggedOutView = (props: any) => {
    if (!props.currentUser) {
        return (
            <header className="shadow-sm bg-white">
                <nav className="container py-2.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <a className="hidden sm:flex" href="/">
                                <div>
                                    <span >
                                        <img alt="" aria-hidden="true" src="https://metajobs.vercel.app/assets/img/logo.svg" />
                                    </span>
                                </div>
                            </a>
                            <a className="sm:hidden flex" href="/">
                                <div>
                                    <span>
                                        <img alt="" aria-hidden="true" src="https://metajobs.vercel.app/assets/img/logo.svg" />
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div>
                            <ul className="bg-white w-full z-50 menu-open md:space-x-8 space-x-6 font-semibold hidden absolute left-0 top-20 lg:static lg:flex">
                                <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-themePrimary text-xs  font-medium transition-all hover:text-themePrimary" href="/">Home</a></li>
                                <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs  font-medium transition-all hover:text-themePrimary" href="/find-job">Find Job</a></li>
                                <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs  font-medium transition-all hover:text-themePrimary" href="/company">Company</a></li>
                                <li className="ml-6 xl:ml-0 xl:mb-0">
                                    <a className="text-arsenic text-xs  font-medium transition-all hover:text-themePrimary" href="/candidate">Candidate</a>
                                </li>
                                <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs  font-medium transition-all hover:text-themePrimary" href="/career-advice">Career Advice</a></li>
                                <li className="ml-6 xl:ml-0 xl:mb-0"><a className="text-arsenic text-xs  font-medium transition-all hover:text-themePrimary" href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex py-2">
                                <li className="">
                                    <button className="block bg-black text-white px-3 py-3 text-xs font-medium rounded-md hover:!bg-themePrimary transition-all outline-none">Sign In</button>
                                </li>
                                <li className="ml-4 hidden md:block">
                                    <button className="block bg-themePrimary text-white px-3 py-3 text-xs font-medium rounded-md hover:bg-black transition-all outline-none">Sign Up</button>
                                </li>
                                <li>
                                    <button className="mobile-toggle flex lg:hidden p-2 rounded-full transition-all outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
    return null;
};

const LoggedInView = (props: any) => {
    if (props.currentUser) {
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
                        to={`/@${props.currentUser.username}`}
                        className="nav-link"
                    >
                        <img src={props.currentUser.image} className="user-pic" alt="" />
                        {props.currentUser.username}
                    </Link>
                </li>

            </ul>
        );
    }

    return null;
};

const Header: React.FC = () => {
    const { commonStore, userStore } = useStore()
    return <Observer>{() => (
        <LoggedOutView currentUser={userStore.currentUser} />
        // <nav className="navbar navbar-light">
        //   <div className="container">

        //     <Link to="/" className="navbar-brand">
        //       {commonStore.appName.toLowerCase()}
        //     </Link>

        //     <LoggedOutView currentUser={userStore.currentUser} />

        //     <LoggedInView currentUser={userStore.currentUser} />
        //   </div>
        // </nav>
    )}</Observer>
}

export default Header;
