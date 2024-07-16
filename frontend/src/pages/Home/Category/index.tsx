import React, { useEffect } from "react";
// import { BeakerIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faUserTie, faPeopleRoof, faChartLine, faHandshakeSlash, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import faContactCard from 'assets/svg/faContactCard.svg';
import { useStore } from "@/store";
import { Observer } from "mobx-react-lite";
import LoadingSpinner from "@/components/LoadingSpinner";

export function Category() {
    const { categoryStore } = useStore();

    useEffect(() => {
        async function loadCategories() {
            await categoryStore.loadCategories();
        }
        loadCategories();
    }, [categoryStore]);

    return <Observer>{() => {
        const { isLoadingCate, categories } = categoryStore;
        if (isLoadingCate) {
            return <LoadingSpinner />;
        } else if (categories) {
            return (
                <section className="py-16 md:py-20 lg:py-25 !bg-light">
                    <div className="container">
                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-bold text-black">Explore By Category</h2>
                        </div>
                        <div className="grid gap-4 xl:gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            {categories.map((item: any) => {
                                return (
                                    <NavLink to={`/jobs/category/${item._id}`} className="text-center bg-white rounded-lg p-6 group cursor-pointer block">
                                        <div className="mb-4 flex justify-center transition-all group-hover:scale-125">
                                            <img alt="" src={item.iconUrl} width={60} height={60} />
                                        </div>
                                        <h4 className="text-lg text-black font-bold mb-3">{item.name}</h4>
                                        <p className="text-grayLight text-xss font-normal text-[#1caf57]">1 Job</p>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )
        } else {
            return null;
        }
    }}</Observer>
}