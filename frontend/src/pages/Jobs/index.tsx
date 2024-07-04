import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import JobCard from '@components/JobCard/JobCard';
import JobFilter from './Filter/JobFilter';
import jobs from 'assets/img/jobs1.jpg';
import { useStore } from '../../store';
import { Job } from '../../stores/jobStore';

const Jobs: React.FC = observer(() => {
  const { jobStore } = useStore();

  useEffect(() => {
    jobStore.loadJobs();
  }, [jobStore]);

  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img src={jobs} alt="Jobs" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Search and Find Your Dream Job</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-14 pb-20 !bg-light'>
        <div className='container 2xl:px-0'>
          <div className='xl:grid grid-cols-12 gap-6'>
            <div className="col-span-3">
              <JobFilter />
            </div>
            <div className='col-span-9'>
              <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-normal sm:justify-center">
                {jobStore.jobs.map((job: Job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
              {jobStore.loading && <div>Loading...</div>}
              {jobStore.error && <div>Error: {jobStore.error}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Jobs;
