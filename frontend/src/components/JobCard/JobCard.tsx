import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';

interface JobProps {
  job: {
    _id: string;
    jobTitle: string;
    employmentType: string;
    businessLogoUrl: string;
    location: string;
    salary: string;
    expiredAt: string;
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="overflow-hidden relative h-full grid content-between px-6 !pt-4 pb-6 border-gray bg-white border border-solid transition-all rounded-md group hover:!border-themePrimary">

      {/* Employment Type */}
      <span className="flex flex-wrap gap-2 left-0">
        <span className="bg-blue-100 py-1 px-2.5 rounded-sm text-xss1 font-normal text-blue-500">
          {job.employmentType}
        </span>
      </span>

      {/* Job Details */}
      <div className="text-center !pt-5 pb-6">
        <div className="flex justify-center mb-4">
          <div style={{ marginBottom: '-7px' }}>
            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
              <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                <img src={job.businessLogoUrl} alt="Company Logo" className="rounded-lg w-16 h-16" />
              </span>
            </span>
          </div>
        </div>
        <h3 className="text-xxs font-normal capitalize text-black leading-5 mb-2">
          {job.jobTitle}
        </h3>
        <div className="flex gap-2 justify-center items-center text-grayLight text-xss1 capitalize font-normal">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
          {job.location}
        </div>
      </div>

      {/* Additional Info */}
      <div className="px-2">
        <ul className="mb-4">
          <li className="mb-2">
            <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
              <FontAwesomeIcon icon={faDollarSign} className="w-4 h-4" />
              {job.salary}
            </div>
          </li>
          <li className="mb-0">
            <div className="flex gap-3 items-center text-deep text-xss1 font-normal">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
              Expired at: {new Date(job.expiredAt).toLocaleDateString()}
            </div>
          </li>
        </ul>
        <div>
          <a
            className="block leading-4 text-deep text-xs group-hover:text-white text-center py-3 px-6 bg-light rounded-md transition-all group-hover:!bg-themePrimary"
            href={`/job/${job._id}`}
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;