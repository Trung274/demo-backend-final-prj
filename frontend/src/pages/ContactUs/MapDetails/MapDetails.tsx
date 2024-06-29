import React from 'react';

const MapEmbed = () => {
  return (
    <div className="pt-10 w-full block">
      <iframe
        className="h-96 w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12075.377291106915!2d-74.084481!3d40.831383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e3160910d4d5045!2sHoliday%20Inn%20Express%20%26%20Suites%20Meadowlands%20Area%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sbd!4v1648105833329!5m2!1sen!2sbd"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapEmbed;