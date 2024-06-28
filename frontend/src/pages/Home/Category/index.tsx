import React from "react";
// import { BeakerIcon } from '@heroicons/react/24/solid'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";

export function Category() {
    return (
        <section className="py-16 md:py-20 lg:py-25 !bg-light">
            <div className="container">
                <div className="text-center mb-14">
                    <h2 className="text-xl font-bold text-black">Explore By Category</h2>
                </div>
                <div className="grid gap-4 xl:gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <a className="text-center bg-white rounded-lg p-6 group cursor-pointer">
                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                        {/* <FontAwesomeIcon icon="fa-brands fa-squarespace" /> */}
                        </div>
                        <h4 className="text-xl text-black font-bold mb-3">Design/creative</h4>
                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                    </a>
                </div>
            </div>
        </section>
    )
}