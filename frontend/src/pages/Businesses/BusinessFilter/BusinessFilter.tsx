import React from 'react';

const BusinessFilter: React.FC = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
        <p className="text-xs py-2 font-bold text-black leading-4">Search Filter</p>
      </div>
      <div className="p-6">
        <form>
          <div className="mb-4">
            <input
              className="bg-light rounded-md w-full py-3 px-6 leading-tight focus:outline-none"
              type="text"
              name="companyName"
              placeholder="Company Name"
            />
          </div>
          <div className="jobCategorise pb-4">
            <select
              aria-label="Default select example"
              name="industry"
              className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 appearance-none w-full"
            >
              <option value="">Select Category</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Service">Customer Service</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Project Management">Project Management</option>
              <option value="Business Development">Business Development</option>
              <option value="Programming">Programming</option>
              <option value="Teaching & Education">Teaching & Education</option>
              <option value="Design & Creative">Design & Creative</option>
            </select>
          </div>
          <div className="jobCategorise pb-4">
            <select
              aria-label="Default select example"
              name="Size"
              className="border-0 focus:shadow-none py-3 bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none svg_icon px-2 appearance-none w-full"
            >
              <option value="">Company Size</option>
              <option value="1-10">1-10</option>
              <option value="10-50">10-50</option>
              <option value="50-100">50-100</option>
              <option value="100-500">100-500</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BusinessFilter;