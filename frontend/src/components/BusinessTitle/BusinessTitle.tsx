import React from 'react';
import FallbackImage from '@assets/img/FallBack.jpg';

interface BusinessTitleProps {
  name: string;
  avatar: string;
  slogan: string;
}

const BusinessTitle: React.FC<BusinessTitleProps> = ({ name, avatar, slogan }) => {
  return (
    <div className="p-8 rounded-md bg-white flex flex-wrap justify-between items-center mb-6 relative">
      <div className="flex gap-6 items-center flex-wrap">
        <div className="w-[100px] h-[100px]">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover rounded-md"
            onError={(e) => {
              e.currentTarget.src = FallbackImage;
            }}
          />
        </div>
        <div className="mb-6 xl:mb-0">
          <h2 className="text-lg text-black font-bold leading-6 mb-2">{name}</h2>
          <p className="text-grayLight text-sm font-normal">{slogan}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessTitle;