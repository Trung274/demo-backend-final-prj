import React from 'react';
import JobCard from '@/components/JobCard/JobCard';

// Mock data for jobs
const mockJobs = [
  {
    _id: '1',
    jobTitle: 'Software Engineer',
    employmentType: ["Full-time"],
    businessLogoUrl: 'https://example.com/logo1.png',
    location: 'San Francisco, CA',
    salary: '$100,000 - $150,000',
    expiredAt: '2024-12-31',
  },
  {
    _id: '2',
    jobTitle: 'Data Scientist',
    employmentType: ["Contract"],
    businessLogoUrl: 'https://example.com/logo2.png',
    location: 'New York, NY',
    salary: '$120,000 - $180,000',
    expiredAt: '2024-11-30',
  },
  {
    _id: '3',
    jobTitle: 'UX Designer',
    employmentType: ["Part-time"],
    businessLogoUrl: 'https://example.com/logo3.png',
    location: 'Remote',
    salary: '$80,000 - $120,000',
    expiredAt: '2024-10-31',
  },
  {
    _id: '4',
    jobTitle: 'C++ Programmer',
    employmentType: ["Part-time"],
    businessLogoUrl: 'https://example.com/logo3.png',
    location: 'Remote',
    salary: '$80,000 - $120,000',
    expiredAt: '2024-10-31',
  },
  {
    _id: '5',
    jobTitle: 'Accountant',
    employmentType: ["Part-time"],
    businessLogoUrl: 'https://example.com/logo3.png',
    location: 'Remote',
    salary: '$80,000 - $120,000',
    expiredAt: '2024-10-31',
  },
];

const SaveMockJobs: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
        <p className="text-xxs text-white">All Saved Jobs</p>
      </div>
      <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SaveMockJobs;