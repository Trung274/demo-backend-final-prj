import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { twMerge } from 'tailwind-merge';

interface JobTitleProps {
  jobTitle: string;
  businessLogoUrl: string;
  businessId: string;
}

const JobTitle: React.FC<JobTitleProps> = ({
  jobTitle,
  businessLogoUrl,
  businessId
}) => {
  return (
    <div className="p-8 rounded-md bg-white flex flex-wrap justify-between items-center mb-6 relative">
      <div className="flex gap-6 items-center flex-wrap">
        <div className="w-[100px] h-[100px]">
          <img 
            src={businessLogoUrl} 
            alt={jobTitle} 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="mb-6 xl:mb-0">
          <h2 className="text-lg text-black font-bold leading-6 mb-2">{jobTitle}</h2>
        </div>
      </div>
      <div className="grid">
        <Link
          to={`/businesses/${businessId}`}
          className={twMerge(
            "py-2.5 px-6 mb-2 leading-4 text-white bg-themePrimary rounded-md transition-all",
            "hover:bg-black hover:text-green"
          )}
        >
          View Business
        </Link>
      </div>
      <button
        className={twMerge(
          "!p-2 group flex absolute top-0 right-0 justify-center items-center gap-2 mb-2 leading-4 rounded-md transition-all",
          "hover:bg-gray-100"
        )}
      >
        <FontAwesomeIcon 
          icon={faHeart} 
          className="text-themeLight group-hover:text-themePrimary text-lg" 
        />
      </button>
    </div>
  );
};

export default JobTitle;