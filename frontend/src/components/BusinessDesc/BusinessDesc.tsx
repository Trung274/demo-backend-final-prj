import React from 'react';

interface BusinessDescProps {
  description: string;
}

const BusinessDesc: React.FC<BusinessDescProps> = ({ description }) => {
  return (
    <div className="p-8 rounded-md bg-white relative">
      <h4 className="text-lg2 font-bold text-black leading-6 mb-6">About Company</h4>
      <div className="mb-8">
        {description}
      </div>
    </div>
  );
};

export default BusinessDesc;