import React from 'react';

const ContactDetails = () => {
  return (
    <div className="w-full mt-16">
      <div className="border-l-4 border-rose-400 px-5">
        <p className="text-lg font-medium text-[#373737]">Address</p>
        <p className="text-grayLight text-base font-normal pt-2">
          158 Ralegih Sit, Houston, <br />
          Yk 5896, UK
        </p>
      </div>
      <hr className="my-7" />
      <div className="border-l-4 border-blue-400 px-5">
        <p className="text-lg font-medium text-[#373737]">Phones</p>
        <p className="text-grayLight text-base font-normal pt-2">
          (406) 555-0120 <span className="text-themePrimary">(Toll Free)</span>
        </p>
        <p className="text-grayLight text-base font-normal pt-2">(406) 555-0120</p>
      </div>
      <hr className="my-7" />
      <div className="border-l-4 border-orange-400 px-5">
        <p className="text-lg font-medium text-[#373737]">E-Mail</p>
        <p className="text-grayLight text-base font-normal pt-2">Support87@Gmial.Com</p>
        <p className="text-grayLight text-base font-normal pt-2">Info@Youremial.Com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
