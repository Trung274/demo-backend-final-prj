import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

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

interface UserInfoProps {
  firstName: string;
  lastName: string;
  email: string;
  profile: Profile;
}

const UserInfo: React.FC<UserInfoProps> = ({ firstName, lastName, email, profile }) => {
  return (
    <div className="px-6 py-6 rounded-md bg-white mb-6 relative">
      <div className="relative bg-white pb-6">
        <div className="text-center pt-2 pb-3">
          <div className="flex justify-center mb-3 mt-8 md:mt-2">
            <div style={{ marginBottom: "-7px" }}>
              <img
                src={profile.avatar}
                alt="Profile"
                className="rounded-full w-26 h-26 md:w-36 md:h-36 p-2 border border-solid border-gray"
              />
            </div>
          </div>
          <h3 className="text-xl font-normal text-black leading-6 my-2">{`${firstName} ${lastName}`}</h3>
          <p className="text-grayLight text-xss1 font-normal">{profile.slogan}</p>
        </div>
      </div>
      <ul className="border-b border-solid border-gray pb-2 mb-6 ml-2 mr-2">
        <li className="flex gap-3 items-center flex-wrap mb-3">
          <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: '#01b04f' }} />
          </div>
          <div>
            <h5 className="text-base font-medium text-black leading-5 mb-0">Email</h5>
            <p className="text-grayLight text-sm">{email}</p>
          </div>
        </li>
        <li className="flex gap-3 items-center flex-wrap mb-3">
          <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: '#01b04f' }} />
          </div>
          <div>
            <h5 className="text-base font-medium text-black leading-5 mb-0">Location</h5>
            <p className="text-grayLight text-sm">{profile.city}</p>
          </div>
        </li>
        <li className="flex gap-3 items-center flex-wrap mb-3">
          <div className="w-6 h-6 flex items-center justify-center">
          <FontAwesomeIcon icon={faPhone} style={{ color: '#01b04f' }} />
          </div>
          <div>
            <h5 className="text-base font-medium text-black leading-5 mb-0">Phone Number</h5>
            <p className="text-grayLight text-sm">{profile.phone}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;