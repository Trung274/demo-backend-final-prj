// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import JobCard from '@components/JobCard/JobCard';
// import jobStore from '../../stores/jobStore';

// const Jobs: React.FC = () => {
//   useEffect(() => {
//     jobStore.loadJobs();
//   }, []);

//   if (jobStore.loading) {
//     return <div>Loading jobs...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Popular Listed Jobs</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {jobStore.jobs.map((job) => (
//           <JobCard key={job._id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default observer(Jobs);

import React from 'react';
import JobCard from '@components/JobCard/JobCard';
import JobFilter from './Filter/JobFilter';
import jobs from '../../assets/img/jobs1.jpg'

// Mock database
const mockJobs = [
  {
    _id: '1',
    jobTitle: 'Software Engineer',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company1-logo.png',
    location: 'San Francisco, CA',
    salary: '$100,000 - $150,000',
    expiredAt: '2024-12-31',
  },
  {
    _id: '2',
    jobTitle: 'Product Manager',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company2-logo.png',
    location: 'New York, NY',
    salary: '$120,000 - $180,000',
    expiredAt: '2024-11-30',
  },
  {
    _id: '3',
    jobTitle: 'UX Designer',
    employmentType: 'Contract',
    businessLogoUrl: 'https://example.com/company3-logo.png',
    location: 'Remote',
    salary: '$80,000 - $120,000',
    expiredAt: '2024-10-31',
  },
  {
    _id: '4',
    jobTitle: 'Data Scientist',
    employmentType: 'Part-time',
    businessLogoUrl: 'https://example.com/company4-logo.png',
    location: 'Boston, MA',
    salary: '$90,000 - $130,000',
    expiredAt: '2024-09-30',
  },
  {
    _id: '5',
    jobTitle: 'Marketing Specialist',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company5-logo.png',
    location: 'Chicago, IL',
    salary: '$60,000 - $90,000',
    expiredAt: '2024-08-31',
  },
  {
    _id: '6',
    jobTitle: 'HR Coordinator',
    employmentType: 'Part-time',
    businessLogoUrl: 'https://example.com/company6-logo.png',
    location: 'Austin, TX',
    salary: '$40,000 - $60,000',
    expiredAt: '2024-07-31',
  },
  {
    _id: '7',
    jobTitle: 'Sales Executive',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company7-logo.png',
    location: 'Seattle, WA',
    salary: '$70,000 - $110,000',
    expiredAt: '2024-06-30',
  },
  {
    _id: '8',
    jobTitle: 'Customer Support Specialist',
    employmentType: 'Remote',
    businessLogoUrl: 'https://example.com/company8-logo.png',
    location: 'Remote',
    salary: '$50,000 - $75,000',
    expiredAt: '2024-05-31',
  },
  {
    _id: '9',
    jobTitle: 'Graphic Designer',
    employmentType: 'Contract',
    businessLogoUrl: 'https://example.com/company9-logo.png',
    location: 'Los Angeles, CA',
    salary: '$55,000 - $85,000',
    expiredAt: '2024-04-30',
  },
  {
    _id: '10',
    jobTitle: 'Operations Manager',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company10-logo.png',
    location: 'Miami, FL',
    salary: '$95,000 - $140,000',
    expiredAt: '2024-03-31',
  },
  {
    _id: '11',
    jobTitle: 'Content Writer',
    employmentType: 'Freelance',
    businessLogoUrl: 'https://example.com/company11-logo.png',
    location: 'Remote',
    salary: '$30,000 - $50,000',
    expiredAt: '2024-02-29',
  },
  {
    _id: '12',
    jobTitle: 'IT Support Technician',
    employmentType: 'Part-time',
    businessLogoUrl: 'https://example.com/company12-logo.png',
    location: 'Denver, CO',
    salary: '$45,000 - $70,000',
    expiredAt: '2024-01-31',
  },
  {
    _id: '13',
    jobTitle: 'Business Analyst',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company13-logo.png',
    location: 'Atlanta, GA',
    salary: '$75,000 - $115,000',
    expiredAt: '2024-12-31',
  },
  {
    _id: '14',
    jobTitle: 'Financial Advisor',
    employmentType: 'Full-time',
    businessLogoUrl: 'https://example.com/company14-logo.png',
    location: 'Phoenix, AZ',
    salary: '$80,000 - $130,000',
    expiredAt: '2024-11-30',
  },
  {
    _id: '15',
    jobTitle: 'Project Coordinator',
    employmentType: 'Contract',
    businessLogoUrl: 'https://example.com/company15-logo.png',
    location: 'Philadelphia, PA',
    salary: '$65,000 - $95,000',
    expiredAt: '2024-10-31',
  },
];

const Jobs: React.FC = () => {
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img src={jobs} alt="Jobs" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-xxl xl:text-xxxl font-bold text-white text-center leading-none mb-6">Search and Find Your Dream Job</h1>
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
                {mockJobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
              <div className='mx-auto px-4 mt-10'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
