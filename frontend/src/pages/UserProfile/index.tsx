import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // TODO: Fetch candidate data based on the id

  return (
    <div>
      <h1>Candidate Profile</h1>
      <p>Candidate ID: {id}</p>
    </div>
  );
};

export default UserProfile;