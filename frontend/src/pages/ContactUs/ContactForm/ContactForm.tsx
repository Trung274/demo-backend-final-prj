import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-semibold text-[#373737]">We're Here to Help</h1>
      <p className="text-base text-grayLight !pt-5">
      At JobHub, we are dedicated to supporting your career journey. Whether you need help finding job opportunities, have questions about our services, or need assistance with your application, our team is here to provide the guidance and support you need. Please fill out the form below, and one of our representatives will get back to you as soon as possible. Your success is our priority.
      </p>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 !pt-5">
          <div>
            <input
              className="!p-3 bg-white rounded border border-themeLighterAlt focus:outline-none !shadow-md w-full transition duration-500 ease-in-out"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="!p-3 bg-white rounded border border-themeLighterAlt focus:outline-none !shadow-md w-full transition duration-500 ease-in-out"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-4">
          <div>
            <input
              className="!p-3 bg-white rounded border border-themeLighterAlt focus:outline-none !shadow-md w-full transition duration-500 ease-in-out"
              type="text"
              name="mobile"
              placeholder="Mobile No"
            />
          </div>
          <div>
            <input
              className="!p-3 bg-white rounded border border-themeLighterAlt focus:outline-none !shadow-md w-full transition duration-500 ease-in-out"
              type="text"
              name="subject"
              placeholder="Subject"
            />
          </div>
        </div>
        <textarea
          className="border border-themeLighterAlt focus:outline-none !shadow-md !p-3 h-40 w-full transition duration-500 ease-in-out rounded"
          name="message"
          placeholder="Type your message"
        ></textarea>
        <button className="bg-themePrimary hover:bg-white flex gap-2 items-center !py-3 px-8 rounded-lg mt-4 border hover:!border-themePrimary hover:!text-themePrimary text-white text-base ease-in-out duration-500">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
