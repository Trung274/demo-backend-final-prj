import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BusinessTitle from "@/components/BusinessTitle/BusinessTitle";
import BusinessDesc from "@/components/BusinessDesc/BusinessDesc";
import BusinessInfo from "@/components/BusinessInfo/BusinessInfo";
import businessImage from 'assets/temp/logo12.jpg';
import { useStore } from '@/store';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Observer } from "mobx-react-lite";

const BusinessProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { userStore } = useStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await userStore.getUserById(id);
      } catch (error) {
      }
    };

    fetchUser();
  }, [id, userStore]);

  return <Observer>{() => {
    const { isLoading, userProfile } = userStore;
    if (isLoading) {
      return <LoadingSpinner />;
    } else if (userProfile) {
      return (
        <>
          <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
            <img src={businessImage} alt="Business-Banner" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
            <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
            <div className="container p-16 relative z-3">
              <div className="w-10/12 m-auto pt-10 pb-7">
                <div className="text-center">
                  <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Company Profile</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-12 pb-20 bg-light">
            <div className="container">
              <div className="lg:grid grid-cols-12 gap-6">
                <div className="col-span-8">
                  <BusinessTitle
                    name={userProfile.profile.name}
                    avatar={userProfile.profile.avatar}
                    slogan={userProfile.profile.slogan}
                  />
                  <BusinessDesc
                    description={userProfile.profile.description}
                  />
                </div>
                <div className="col-span-4">
                  <BusinessInfo
                    website={userProfile.profile.website}
                    employees={userProfile.profile.employees}
                    industry={userProfile.profile.industry}
                    phone={userProfile.profile.phone}
                    city={userProfile.profile.city}
                    address={userProfile.profile.address}
                  />
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

export default BusinessProfile;