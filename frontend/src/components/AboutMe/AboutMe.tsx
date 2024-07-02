import React from 'react';

interface Profile {
  name: string;
  avatar: string;
  description: string;
  slogan: string;
  phone: string;
  city: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

interface AboutMeProps {
  firstName: string;
  lastName: string;
  email: string;
  profile: Profile;
}

const AboutMe: React.FC<AboutMeProps> = ({ profile }) => {
  return (
    <div className="px-7 pt-6 pb-2 rounded-md bg-white relative">
      <h4 className="text-2xl font-bold text-black leading-6 mb-4">About Me</h4>
      <div className="mb-8">
        <div className="text-xs text-deep font-normal leading-6 mb-6"
             dangerouslySetInnerHTML={{ __html: profile.description }}
        />
      </div>
    </div>
  );
};

export default AboutMe;