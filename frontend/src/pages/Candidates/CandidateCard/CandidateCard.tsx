import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface CandidateCardProps {
  name: string;
  avatar: string;
  city: string;
  id: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ name, avatar, city, id }) => {
  return (
    <div className="relative grid content-between bg-white p-6 border-white border border-solid transition-all rounded-md group hover:!border-themePrimary">
      <div className="text-center pt-2 pb-3">
        <div className="flex justify-center mb-2">
          <div className="-mb-2">
            <img
              src={avatar || '/assets/img/default-avatar.png'}
              alt={name}
              className="rounded-full p-2 border border-solid border-gray group-hover:border-themePrimary w-24 h-24 object-cover"
            />
          </div>
        </div>
        <h3 className="text-xs font-normal text-black leading-6 mb-0">{name}</h3>
        <p className="flex gap-2 items-center justify-center text-grayLight text-xss1 font-normal">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {city}
        </p>
      </div>
      <a
        href={`/resume/${id}`}
        className="block text-center py-3 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all font-medium text-xs group-hover:text-white"
      >
        View Candidate
      </a>
    </div>
  );
};

export default CandidateCard;
