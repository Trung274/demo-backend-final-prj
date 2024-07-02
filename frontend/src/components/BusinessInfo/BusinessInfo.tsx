import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUsers, faIndustry, faPhone, faCity, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface BusinessInfoProps {
  website: string;
  employees: string;
  industry: string;
  phone: string;
  city: string;
  address: string;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  website,
  employees,
  industry,
  phone,
  city,
  address
}) => {
  return (
    <div className="p-8 rounded-md bg-white mb-6 relative">
      <h4 className="text-lg2 font-bold text-black leading-6 mb-6">Company Information</h4>
      <ul>
        <InfoItem icon={faGlobe} title="Website" value={website} />
        <InfoItem icon={faUsers} title="Employees" value={employees} />
        <InfoItem icon={faIndustry} title="Industry" value={industry} />
        <InfoItem icon={faPhone} title="Phone" value={phone} />
        <InfoItem icon={faCity} title="City" value={city} />
        <InfoItem icon={faMapMarkerAlt} title="Address" value={address} />
      </ul>
    </div>
  );
};

interface InfoItemProps {
  icon: any;
  title: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, value }) => (
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

export default BusinessInfo;