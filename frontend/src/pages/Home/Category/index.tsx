import React from "react";
// import { BeakerIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';
import { faHeadphones, faUserTie, faPeopleRoof, faChartLine, faHandshakeSlash, faChalkboardTeacher} from '@fortawesome/free-solid-svg-icons';

export function Category() {
    return (
        <section className="py-16 md:py-20 lg:py-25 !bg-light">
            <div className="container">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-black">Explore By Category</h2>
                </div>
                <div className="grid gap-4 xl:gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faContactCard} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Marketing</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faHeadphones} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Customer Service</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faUserTie} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Human Resource</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faPeopleRoof} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Project Management</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faChartLine} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Business Development</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faHandshakeSlash} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Sales & Communication</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Teaching & Education</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                            <FontAwesomeIcon icon={faContactCard} size="3x" className="text-[#1caf57]"/>
                        </div>
                        <h4 className="text-lg text-black font-bold mb-3">Design & Creative</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                </div>
            </div>
        </section>
    )
}