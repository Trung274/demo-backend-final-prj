import React, { useEffect } from 'react';
import CandidateCard from './CandidateCard/CandidateCard';
import candidate from '../../assets/img/candidate.jpg';
import { useStore } from '@/store';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Observer } from 'mobx-react-lite';

const Candidates: React.FC = () => {
  const { userStore } = useStore();

  useEffect(() => {
    async function getBusinesses() {
      await userStore.loadUserByType('candidate');
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
            <img src={candidate} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
            <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
            <div className="container p-16 relative z-3">
              <div className="w-10/12 m-auto pt-10 pb-7">
                <div className="text-center">
                  <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Candidate List</h1>
                </div>
              </div>
            </div>
          </section>
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Candidate List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {listUser.map((user: any) => (
                <CandidateCard
                  key={user._id}
                  id={user._id}
                  name={user.profile.name}
                  avatar={user.profile.avatar}
                  city={user.profile.city}
                />
              ))}
            </div>
          </div>
        </>
      )
    } else {
      return null;
    }
  }}</Observer>
};

export default Candidates;