import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: Fetch candidate data based on the id

  return (
    <div>
      <h1>Job Details</h1>
      <p>Job ID: {id}</p>
    </div>
  );
};

export default BusinessProfile;