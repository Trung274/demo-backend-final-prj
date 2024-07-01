import React from 'react';

const ContactDetails = () => {
  return (
    <div className="w-full mt-16">
      <div className="border-l-4 border-rose-400 px-5">
        <p className="text-lg font-medium text-[#373737]">Address</p>
        <p className="text-grayLight text-base font-normal pt-2">
        15/8 P. Duy Tân, Dịch Vọng Hậu, Cầu Giấy,<br />
        Hà Nội 11310, Vietnam 
        </p>
      </div>
      <hr className="my-7" />
      <div className="border-l-4 border-blue-400 px-5">
        <p className="text-lg font-medium text-[#373737]">Phones</p>
        <p className="text-grayLight text-base font-normal pt-2">
        +84 981 568196 <span className="text-themePrimary">(Toll Free)</span>
        </p>
        <p className="text-grayLight text-base font-normal pt-2">+84 981 568196</p>
      </div>
      <hr className="my-7" />
      <div className="border-l-4 border-orange-400 px-5">
        <p className="text-lg font-medium text-[#373737]">E-Mail</p>
        <p className="text-grayLight text-base font-normal pt-2">trungnt.bi11-274@st.usth.edu.vn</p>
        <p className="text-grayLight text-base font-normal pt-2">trungnt261@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactDetails;
