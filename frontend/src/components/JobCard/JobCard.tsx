import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import FallbackImage from '@assets/img/FallBack.jpg';

interface JobProps {
  job: {
    _id: string;
    jobTitle: string;
    employmentType: string[];
    businessLogoUrl: string;
    location: string;
    salary: string;
    expiredAt: string;
  };
}

const JobCard: React.FC<JobProps> = ({ job }) => {
  return (
    <div className="overflow-hidden relative h-full grid content-between px-6 !pt-4 pb-6 border-gray bg-white border border-solid transition-all rounded-md group hover:!border-themePrimary">

      {/* Top Section with Employment Type and Save Button */}
      <div className="flex justify-between items-center mb-2">
        <span className="bg-blue-100 py-1 px-2.5 rounded-sm text-xss1 font-normal text-blue-500">
          {job.employmentType.join(', ')}
        </span>
        <a href=""
          className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bookmark size-4">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
      </div>

      {/* Job Details */}
      <div className="text-center !pt-5 pb-6">
        <div className="flex justify-center mb-4">
          <div style={{ marginBottom: '-7px' }}>
            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
              <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                <img
                  src={job.businessLogoUrl}
                  alt="Company Logo"
                  className="rounded-lg w-16 h-16"
                  onError={(e) => {
                    e.currentTarget.src = FallbackImage;
                  }}
                />
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
          <NavLink
            to={`/jobs/${job._id}`}
            className="block leading-4 text-deep transition-all font-medium text-xs group-hover:text-white-important text-center py-3 px-6 bg-light rounded-md group-hover:!bg-themePrimary"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobCard;