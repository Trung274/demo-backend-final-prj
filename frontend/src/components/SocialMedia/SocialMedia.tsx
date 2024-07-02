import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

interface SocialMediaProps {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ facebook, twitter, linkedin }) => {
  return (
    <div className="px-6 py-6 rounded-md bg-white mb-6 relative">
      <h4 className="text-lg2 font-bold text-black leading-6 mb-4">Social Media</h4>
      <ul className="flex flex-col space-y-3">
        {facebook && (
          <li>
            <a 
              href={facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 mr-3" />
              Facebook
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 mr-3" />
              Twitter
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5 mr-3" />
              LinkedIn
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SocialMedia;