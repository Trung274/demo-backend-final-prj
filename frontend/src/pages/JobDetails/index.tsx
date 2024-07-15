import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import JobTitle from "@/components/JobTitle/JobTitle";
import JobDesc from "@/components/JobDesc/JobDesc";
import JobOverview from "@/components/JobOverview/JobOverview";
import { Job } from '@/stores/jobStore';
import FallbackImage from '@assets/img/FallBack.jpg';

const JobDetails: React.FC = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { jobStore } = useStore();
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const loadJob = async () => {
      if (id) {
        debugger
        const fetchedJob = await jobStore.getJobById(id);
        if (fetchedJob) {
          setJob(fetchedJob);
        }
      }
    };
    loadJob();
  }, [id, jobStore]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img 
          src={`${process.env.REACT_APP_API_URL}${job.businessLogoUrl}`} 
          alt="Job-Banner" 
          className="absolute w-full h-full object-cover top-0 left-0 z-1" 
          style={{ opacity: 0.5 }} 
          onError={(e) => {
            e.currentTarget.src = FallbackImage;
          }}
        />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Job Details</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-20 bg-light">
        <div className="container">
          <div className="lg:grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <JobTitle
                jobTitle={job.jobTitle}
                businessLogoUrl={job.businessLogoUrl}
                businessId={job.userId}
              />
              <JobDesc
                description={job.description}
              />
            </div>
            <div className="col-span-4">
              <JobOverview
                createdAt={job.createdAt}
                expiredAt={job.expiredAt}
                employmentType={job.employmentType}
                categoryId={job.categoryId}
                salary={job.salary}
                location={job.location}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default JobDetails;