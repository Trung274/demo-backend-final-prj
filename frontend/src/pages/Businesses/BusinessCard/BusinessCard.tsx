import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

interface BusinessCardProps {
  _id: string;
  name: string;
  slogan: string;
  description: string;
  employees: string;
  city: string;
  avatar: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ _id, name, slogan, description, employees, city, avatar }) => {
  return (
    <div className="relative grid content-between bg-white p-6 border-gray border border-solid transition-all rounded-md group hover:!border-themePrimary">
      <div className="text-center pt-4 pb-6">
        <div className="flex justify-center mb-3">
          <img src={avatar} alt={name} className="w-24 h-24 rounded-lg" />
        </div>
        <h3 className="text-xs font-normal text-black leading-6 mb-0">{name}</h3>
        <p className="text-deep text-xss1 font-normal mb-2 leading-6">{slogan}</p>
      </div>
      <div className="px-2">
        <ul className="mb-6">
          <li className="mb-3">
            <p className="flex gap-3 items-center text-deep text-xss1 font-normal">
              <FontAwesomeIcon icon={faUsers} />
              {employees} Employees
            </p>
          </li>
          <li className="mb-0">
            <p className="flex gap-3 items-center text-deep text-xss1 font-normal">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {city}
            </p>
          </li>
        </ul>
      </div>
      <div>
        <NavLink
          to={`/business/${_id}`}
          className="block leading-4 text-deep transition-all font-medium text-xs group-hover:text-white-important text-center py-3 px-6 bg-light rounded-md group-hover:!bg-themePrimary"
        >
          See Details
        </NavLink>
      </div>
    </div>
  );
};

export default BusinessCard;