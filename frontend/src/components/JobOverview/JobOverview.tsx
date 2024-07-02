import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faClock, faBriefcase, faFolder, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface JobOverviewProps {
  createdAt: string;
  expiredAt: string;
  employmentType: string[];
  categoryId: string;
  salary: string;
  location: string;
}

const JobOverview: React.FC<JobOverviewProps> = ({
  createdAt,
  expiredAt,
  employmentType,
  categoryId,
  salary,
  location
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="p-8 rounded-md bg-white mb-6 relative">
      <h4 className="text-lg2 font-bold text-black leading-6 mb-6">Job Overview</h4>
      <ul>
        <OverviewItem icon={faCalendar} title="Job Posted" value={formatDate(createdAt)} />
        <OverviewItem icon={faClock} title="Deadline" value={formatDate(expiredAt)} />
        <OverviewItem icon={faBriefcase} title="Employment Type" value={employmentType.join(', ')} />
        <OverviewItem icon={faFolder} title="Category" value={categoryId} />
        <OverviewItem icon={faDollarSign} title="Salary" value={salary} />
        <OverviewItem icon={faMapMarkerAlt} title="Job Location" value={location} />
      </ul>
    </div>
  );
};

interface OverviewItemProps {
  icon: any;
  title: string;
  value: string;
}

const OverviewItem: React.FC<OverviewItemProps> = ({ icon, title, value }) => (
  <li className="flex gap-3 items-center flex-wrap mb-3">
    <div className="w-12 h-12 bg-themeLighter flex items-center justify-center rounded-md">
      <FontAwesomeIcon icon={icon} className="text-themePrimary text-lg" />
    </div>
    <div>
      <h5 className="text-base font-medium text-black leading-5 mb-0">{title}</h5>
      <p className="text-grayLight text-sm font-normal">{value}</p>
    </div>
  </li>
);

export default JobOverview;