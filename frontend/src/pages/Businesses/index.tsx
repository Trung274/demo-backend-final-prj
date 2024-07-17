import React, { useEffect } from 'react';
import BusinessCard from './BusinessCard/BusinessCard';
import BusinessFilter from './BusinessFilter/BusinessFilter';
import business from '../../assets/img/business.jpg';
import { useStore } from "@/store";
import { Observer } from "mobx-react-lite";
import LoadingSpinner from "@/components/LoadingSpinner";

const Businesses: React.FC = () => {
  const { userStore } = useStore();

  useEffect(() => {
    async function getBusinesses() {
      await userStore.loadUserByType('employer');
    }
    getBusinesses();
  }, [userStore]);

  return <Observer>{() => {
    const { isLoading, listUser } = userStore;
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (listUser) {
      return (
        <>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
            <img src={business} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
            <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
            <div className="container p-16 relative z-3">
              <div className="w-10/12 m-auto pt-10 pb-7">
                <div className="text-center">
                  <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">All Businesses</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-16 pb-20 !bg-light">
            <div className='container 2xl:px-0'>
              <div className="xl:grid grid-cols-12 gap-6">
                <div className='col-span-3'>
                  <BusinessFilter />
                </div>
                <div className='col-span-9'>
                  <div className='grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    {listUser.map((business: any) => (
                      <BusinessCard
                        _id={business._id.toString()}
                        name={business.profile.name}
                        slogan={business.profile.slogan}
                        description={business.profile.description}
                        employees={business.profile.employees}
                        city={business.profile.city}
                        avatar={business.profile.avatar}
                      />
                    ))}
                  </div>
                  <div className='mx-auto px-4 mt-10'></div>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    } else {
      return null;
    }
  }}</Observer>
};

export default Businesses;