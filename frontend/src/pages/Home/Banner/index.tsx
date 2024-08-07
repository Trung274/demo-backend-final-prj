import React from "react";
import { NavLink } from "react-router-dom";
import main from "../../../assets/img/main.jpg";
import businessman from 'assets/svg/businessman.svg';
import company from 'assets/svg/company.svg';
import jobs from 'assets/svg/jobs.svg';

export function Banner() {
    return (
        <section
            className="py-16 md:py-20 lg:py-24 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${main})` }}>
            <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: "rgba(0, 124, 50, 0.7)" }}></div>
            <div className="container">
                <div className="w-10/12 m-auto z-4 relative">
                    <div className="text-center">
                        <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Discover Your Ideal Career Path <br className="hidden xl:inline" />With JobHub</h1>
                        <p className="text-lg font-normal text-white leading-8">Find opportunities that match your skills and aspirations. <br className="hidden xl:inline" />Start your journey towards a fulfilling career today!</p>
                    </div>
                    <div className="search-wrapper mt-10 p-2 rounded-2xl mb-10" style={{ backgroundColor: "rgba(121, 184, 151, 0.5)" }}>
                        <form>
                            <div className="bg-white overflow-hidden rounded-xl md:grid gap-7 lg:gap-10 grid-cols-8 xl:grid-cols-7 items-center">
                                <div className="col-span-2 px-4 md:px-0 md:pl-4 border-r-2 border-gray h-full flex items-center">
                                    <input type="text" className="w-full block !pr-3 py-4 border-b-2 border-gray md:border-0 md:py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-deep" placeholder="Job Title" name="jobTitle" style={{ backgroundImage: "url(https://metajobs.vercel.app/assets/img/search.svg)", backgroundPosition: "0px center" }} />
                                </div>
                                <div className="col-span-2 px-4 md:!px-0 border-r-2 border-gray h-full flex items-center">
                                    <input type="text" className="w-full block !pr-3 py-3 border-b-2 border-gray md:border-0 md:py-4 focus:outline-none bg-left bg-no-repeat px-8 placeholder:text-deep" placeholder="Location" name="location" style={{ backgroundImage: "url(https://metajobs.vercel.app/assets/img/map-pin.svg)", backgroundPosition: "0px center" }} />
                                </div>
                                <div className="col-span-2 px-4 md:!px-0">
                                    <select aria-label="Default select example" name="category" className="border-0 focus:shadow-none py-3 select2-init text-xxs text-deep font-normal focus-visible:white focus:outline-none w-full">
                                        <option value="Marketing">Marketing</option>
                                        <option value="Customer Service">Customer Service</option>
                                        <option value="Human Resource">Human Resource</option>
                                        <option value="Project Management">Project Management</option>
                                        <option value="Business Development">Business Development</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Teaching & Education">Teaching & Education</option>
                                        <option value="Design & Creative">Design & Creative</option>
                                    </select>
                                </div>
                                <div className="btn-banner px-4 md:!px-0 col-span-2 xl:col-span-1 text-center grid md:justify-end py-4 md:!py-2 lg:text-right mr-4">
                                    <button type="submit" className="md:w-28 block bg-themePrimary text-white px-4 py-4 text-xs font-medium rounded-md hover:bg-black transition-all outline-none">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="grid gap-8 xl:gap-12 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
                        <NavLink to="/jobs" className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                            <div className="flex mb-6 justify-center">
                                <img alt="Available Jobs" src={jobs} />
                            </div>
                            <h2 className="text-3xl text-black font-bold leading-none mb-2">26 +</h2>
                            <p className="text-xs text-deep font-medium">JOB AVAILABLE</p>
                        </NavLink>
                        <NavLink to="/businesses" className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                            <div className="flex mb-6 justify-center">
                                <img alt="Companies" src={company} />
                            </div>
                            <h2 className="text-3xl text-black font-bold leading-none mb-2">20 +</h2>
                            <p className="text-xs text-deep font-medium">COMPANY</p>
                        </NavLink>
                        <NavLink to="/candidates" className="bg-white rounded-lg text-center p-8 duration-300 transition hover:bg-opacity-90">
                            <div className="flex mb-6 justify-center">
                                <img alt="Available Resumes" src={businessman} />
                            </div>
                            <h2 className="text-3xl text-black font-bold leading-none mb-2">20 +</h2>
                            <p className="text-xs text-deep font-medium">AVAILABLE RESUMES</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}