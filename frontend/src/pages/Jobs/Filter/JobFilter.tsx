import React from 'react';

const JobFilter: React.FC = () => {
  return (
      <div className="bg-white rounded-lg">
        <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
          <p className="text-xs py-2 font-bold text-black leading-4">Search Filter</p>
        </div>
        <div className="p-6">
          <form className="border-b border-gray">
            <div className="mb-4">
              <input
                className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                type="text"
                name="jobTitle"
                placeholder="Job Title or Keyword"
              />
            </div>
            <div className="mb-4">
              <input
                className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
                type="text"
                name="location"
                placeholder="Location"
              />
            </div>
            <div className="jobCategorise pb-4">
              <select
                aria-label="Categories"
                name="category"
                className="border-0 focus:shadow-none h-[52px] bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none w-full svg_icon px-2 appearance-none rounded-md"
              >
                <option value="">Select Categories</option>
                <option value="Design/Creative">Design/creative</option>
                <option value="Education Training">Education training</option>
                <option value="Engineer/Architects">Engineer/architects</option>
                <option value="Marketing/Sales">Marketing/sales</option>
                <option value="IT/Telecommunication">It/telecommunication</option>
                <option value="Accounting/Finance">Accounting/finance</option>
              </select>
            </div>
          </form>
        </div>
        <div className="collapsed-group mb-4">
          <div className="mb-2">
            <div className="px-6 flex items-center justify-between">
              <div className="">
                <p className="text-xs font-bold text-black leading-4">Job Type</p>
              </div>
            </div>
            <div className="collapsed-item px-6 py-4">
              <div className="border-b border-gray">
                {[
                  { id: 'Freelance', label: 'Freelance', count: 9 },
                  { id: 'Full Time', label: 'Full time', count: 15 },
                  { id: 'Internship', label: 'Internship', count: 5 },
                  { id: 'Part Time', label: 'Part time', count: 8 },
                  { id: 'Remote', label: 'Remote', count: 3 },
                ].map(({ id, label, count }) => (
                  <div key={id} className="mb-3 w-full relative">
                    <div className="w-full">
                      <div className="text-themeLight flex items-center gap-3">
                        <input
                          type="checkbox"
                          id={id}
                          className="w-5 h-5 bg-[#d5dde5] border border-[#d5dde5] rounded-[3px] mt-0.5 accent-green-600 focus:shadow-none flex-none"
                        />
                        <label htmlFor={id} className="w-full cursor-pointer text-base leading-[18px]">
                          {label}
                        </label>
                      </div>
                    </div>
                    <span className="text-xs text-deep font-normal top-0 right-0 absolute">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default JobFilter;