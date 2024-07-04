import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';

const JobFilter: React.FC = observer(() => {
  const { jobStore } = useStore();
  const [filters, setFilters] = useState({
    query: '',
    location: '',
    categoryId: '',
    employmentType: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      employmentType: checked
        ? [...prev.employmentType, value]
        : prev.employmentType.filter(type => type !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const searchParams = {
    query: filters.query,
    location: filters.location,
    categoryId: filters.categoryId,
    employmentType: filters.employmentType
  };
  jobStore.searchJobs(searchParams);
};

  return (
    <div className="bg-white rounded-lg">
      <div className="px-6 py-3 flex items-center justify-between border-b border-gray">
        <p className="text-xs py-2 font-bold text-black leading-4">Search Filter</p>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="border-b border-gray">
          <div className="mb-4">
            <input
              className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
              type="text"
              name="query"
              placeholder="Job Title or Keyword"
              value={filters.query}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-light rounded-md w-full text-grayLight text-base py-3 px-6 leading-tight focus:outline-none"
              type="text"
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleInputChange}
            />
          </div>
          <div className="jobCategorise pb-4">
            <select
              aria-label="Categories"
              name="categoryId"
              className="border-0 focus:shadow-none h-[52px] bg-light text-xxs text-grayLight text-base font-normal focus-visible:white focus:outline-none w-full svg_icon px-2 appearance-none rounded-md"
              value={filters.categoryId}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option value="6685109142e0602b2581fb85">Marketing</option>
              <option value="6685109142e0602b2581fb86">Customer Service</option>
              <option value="6685109142e0602b2581fb87">Human Resource</option>
              <option value="6685109142e0602b2581fb88">Project Management</option>
              <option value="6685109142e0602b2581fb89">Business Development</option>
              <option value="6685109142e0602b2581fb8a">Programming</option>
              <option value="6685109142e0602b2581fb8b">Teaching & Education</option>
              <option value="6685109142e0602b2581fb8c">Design & Creative</option>
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
                        value={id}
                        checked={filters.employmentType.includes(id)}
                        onChange={handleCheckboxChange}
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
      <div className="px-6 pb-6">
        <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md w-full">
          Search Jobs
        </button>
      </div>
    </div>
  );
});

export default JobFilter;