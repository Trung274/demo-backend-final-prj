import React, { FC, Fragment, useEffect, useState } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Banner } from './Banner';
import { Category } from './Category';
import JobCard from '@components/JobCard/JobCard';
import TabList from '@/components/Tabs/TabList';
import TabItem from '@/components/Tabs/TabItem';
import about1 from '../../assets/img/about1.jpg';
import about2 from '../../assets/img/about2.jpg';
import article1 from '../../assets/img/article1.jpg';
import article2 from '../../assets/img/article2.jpg';
import article3 from '../../assets/img/article3.jpg';

const mockJobs = [
  {
    _id: "1",
    jobTitle: "Marketing Director",
    employmentType: "Full Time",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg",
    location: "New York, USA",
    salary: "$4,000 - $5,000",
    expiredAt: "2024-08-15"
  },
  {
    _id: "2",
    jobTitle: "Software Engineer",
    employmentType: "Part Time",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-2.jpg",
    location: "San Francisco, USA",
    salary: "$6,000 - $8,000",
    expiredAt: "2024-07-30"
  },
  {
    _id: "3",
    jobTitle: "Data Analyst",
    employmentType: "Remote",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-3.jpg",
    location: "London, UK",
    salary: "$3,500 - $4,500",
    expiredAt: "2024-09-01"
  },
  {
    _id: "4",
    jobTitle: "Product Manager",
    employmentType: "Full Time",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-4.jpg",
    location: "Berlin, Germany",
    salary: "$5,000 - $7,000",
    expiredAt: "2024-08-20"
  },
  {
    _id: "5",
    jobTitle: "UX Designer",
    employmentType: "Contract",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-5.jpg",
    location: "Toronto, Canada",
    salary: "$4,500 - $6,000",
    expiredAt: "2024-07-25"
  },
  {
    _id: "6",
    jobTitle: "Sales Representative",
    employmentType: "Full Time",
    businessLogoUrl: "https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-6.jpg",
    location: "Sydney, Australia",
    salary: "$3,000 - $4,000",
    expiredAt: "2024-08-10"
  }
];

const Home: React.FC = () => {
  const { commonStore } = useStore();

  useEffect(() => {
    async function loadTags() {
      // await commonStore.loadTags();
    }
    loadTags();
  }, [commonStore]);

  return <Observer>{() => {
    const { appName, isLoadingTags, tags, token } = commonStore;
    return (
      <div className="home-page">
        <main>
          <Banner />
          <Category />

          {/* Contact Us */}
          <section className="py-16 md:py-20 lg:py-25 bg-white">
            <div className="container md:pb-16">
              <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div className="lg:col-span-5 md:col-span-6">
                  <div className="relative">
                    <div className="relative">
                      <img src={about1} className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />

                    </div>
                    <div className="absolute md:-end-5 end-0 -bottom-16">
                      <img src={about2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                  <div className="lg:ms-5">
                    <h3 className="mb-6 md:text-[26px] text-2xl md:leading-normal leading-normal font-semibold">Millions of jobs. <br /> Find the one that's right for you.</h3>

                    <p className="text-slate-400 max-w-xl">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>

                    <ul className="list-none text-slate-400 mt-4">
                      <li className="mb-1 flex"><i className="fa-regular fa-circle-check text-emerald-600 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                      <li className="mb-1 flex"><i className="fa-regular fa-circle-check text-emerald-600 text-xl me-2"></i> Our Talented &amp; Experienced Marketing Agency</li>
                      <li className="mb-1 flex"><i className="fa-regular fa-circle-check text-emerald-600 text-xl me-2"></i> Create your own skin to match your brand</li>
                    </ul>
                    <div className="mt-6">
                      <a href="/contact-us" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md">
                        <i className="fa-regular fa-envelope"></i> Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Listed Jobs */}
          <section className="py-16 md:py-20 lg:py-24 !bg-light">
            <div className="container">
              <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-black">Popular Listed jobs</h2>
                <TabList classCss='flex gap-2 justify-center p-2' activeTabIndex={0}>
                  <TabItem label="Featured">
                    <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-normal sm:justify-center">
                      {mockJobs.map((job) => (
                        <JobCard key={job._id} job={job} />
                      ))}
                    </div>
                    <div className="mt-8">
                      <div className="grid grid-cols-1">
                        <div className="text-center">
                          <a href="/jobs" className="btn text-white border-transparent btn focus:ring focus:ring-custom-500/20 bg-[#1caf57]">View More  <i className="uil uil-arrow-right ms-1"></i></a>
                        </div>
                      </div>
                    </div>
                  </TabItem>
                  <TabItem label="Full Time">
                    <p>Full Time</p>
                  </TabItem>
                  <TabItem label="Part Time">
                    <p>Part Time</p>
                  </TabItem>
                </TabList>
              </div>
            </div>
          </section>

          {/* Blog */}
          <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container">
              <div className="text-center mb-14">
                <p className="text-themePrimary font-bold text-3xl leading-none mb-1">Our Blog.</p>
                <h2 className="text-xl font-bold text-black">See How You Can Up Your Career Status</h2>
              </div>
              <div className="grid gap-4 xl:gap-6 xl:grid-cols-3 md:grid-cols-2">
                <div className="single-blog !p-5 border-gray border border-solid transition-all rounded-md group hover:border-themePrimary">
                  <div className="img mb-4 overflow-hidden rounded-md">
                    <a href="/blog/single-blog">
                      <img alt="" aria-hidden="true" src={article1} />
                    </a>
                  </div>
                  <p className="text-grayLight text-xss font-normal mb-2">01 July 2024</p>
                  <a className="text-arsenic hover:text-themePrimary transition-all duration-300 ease-in-out text-lg2 font-bold leading-6 mb-3 block" href="/blog/single-blog">How to Ace Your Next Job Interview</a>
                  <div className="mb-6">
                    <p className="text-xs text-deep font-normal leading-6">"Preparing for a job interview can be a daunting task, but with the right strategies, you can make a lasting impression. Start by researching the company and understanding its culture. Practice common interview questions and answers, and dress appropriately for the role. During the interview, be confident, make eye contact, and listen carefully to the questions before responding. After the interview, don't forget to send a thank-you email to express your appreciation for the opportunity. These steps can significantly increase your chances of landing the job."</p>
                  </div>
                  <div className="blog-btn">
                    <a className="inline-flex gap-3 items-center py-2.5 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all text-xxs group-hover:!text-white" href="/blog/single-blog">Read More</a>
                  </div>
                </div>
                <div className="single-blog !p-5 border-gray border border-solid transition-all rounded-md group hover:border-themePrimary">
                  <div className="img mb-4 overflow-hidden rounded-md">
                    <a href="/blog/single-blog">
                      <img alt="" aria-hidden="true" src={article2} />
                    </a>
                  </div>
                  <p className="text-grayLight text-xss font-normal mb-2">15 June 2024</p>
                  <a className="text-arsenic hover:text-themePrimary transition-all duration-300 ease-in-out text-lg2 font-bold leading-6 mb-3 block" href="/blog/single-blog">The Importance of Networking in Your Career</a>
                  <div className="mb-6">
                    <p className="text-xs text-deep font-normal leading-6">"Networking is a powerful tool that can propel your career to new heights. Building a strong professional network opens doors to opportunities that might not be advertised publicly. Attend industry events, join professional associations, and participate in online forums to meet new people in your field. Networking isn't just about what others can do for you; it's also about what you can offer in return. Share your knowledge, skills, and resources to build mutually beneficial relationships. Over time, your network can provide valuable support, advice, and job leads."</p>
                  </div>
                  <div className="blog-btn">
                    <a className="inline-flex gap-3 items-center py-2.5 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all text-xxs group-hover:!text-white" href="/blog/single-blog">Read More</a>
                  </div>
                </div>
                <div className="single-blog !p-5 border-gray border border-solid transition-all rounded-md group hover:border-themePrimary">
                  <div className="img mb-4 overflow-hidden rounded-md">
                    <a href="/blog/single-blog">
                      <img alt="" aria-hidden="true" src={article3} />
                    </a>
                  </div>
                  <p className="text-grayLight text-xss font-normal mb-2">30 May 2024</p>
                  <a className="text-arsenic hover:text-themePrimary transition-all duration-300 ease-in-out text-lg2 font-bold leading-6 mb-3 block" href="/blog/single-blog">Balancing Work and Life: Tips for a Healthier Lifestyle</a>
                  <div className="mb-6">
                    <p className="text-xs text-deep font-normal leading-6">"Achieving a healthy work-life balance is essential for both your mental and physical well-being. Start by setting clear boundaries between work and personal time. Make a schedule that includes time for work, family, and leisure activities. Prioritize tasks and learn to say no to non-essential commitments. Incorporate regular exercise and healthy eating into your daily routine to boost your energy levels and reduce stress. Additionally, ensure you get enough sleep each night to allow your body to recover. Remember, a well-balanced life leads to greater productivity and happiness."</p>
                  </div>
                  <div className="blog-btn">
                    <a className="inline-flex gap-3 items-center py-2.5 px-6 bg-light rounded-md group-hover:!bg-themePrimary leading-4 text-deep transition-all text-xxs group-hover:!text-white" href="/blog/single-blog">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }}</Observer>
}

export default Home;