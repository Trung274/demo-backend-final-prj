import React, { FC, Fragment, useEffect, useState } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Banner } from './Banner';
import { Category } from './Category';
import TabList from '@/components/Tabs/TabList';
import TabItem from '@/components/Tabs/TabItem';
import about1 from '../../assets/img/about-1.jpg';
import about2 from '../../assets/img/about-2.jpg';

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
          <section className="py-16 md:py-20 lg:py-24 !bg-light">
            <div className="container">
              <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-black">Popular Listed jobs</h2>
                <TabList classCss='flex gap-2 justify-center p-2' activeTabIndex={0}>
                  <TabItem label="Featured">
                    <div className="grid grid-cols-1 gap-[25px]">
                      <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-6 bg-white">
                        <div className="flex items-center">
                          <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg" className="size-14" alt="" />
                          </div>
                          <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-4">
                          <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                          <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-2">
                          <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
                          <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>
                        <div className="md:mt-0 mt-4">
                          <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark size-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a>
                          <a href="" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-6 bg-white">
                        <div className="flex items-center">
                          <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg" className="size-14" alt="" />
                          </div>
                          <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-4">
                          <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                          <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-2">
                          <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
                          <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>
                        <div className="md:mt-0 mt-4">
                          <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark size-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a>
                          <a href="" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-6 bg-white">
                        <div className="flex items-center">
                          <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg" className="size-14" alt="" />
                          </div>
                          <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-4">
                          <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                          <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-2">
                          <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
                          <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>
                        <div className="md:mt-0 mt-4">
                          <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark size-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a>
                          <a href="" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-6 bg-white">
                        <div className="flex items-center">
                          <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg" className="size-14" alt="" />
                          </div>
                          <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-4">
                          <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                          <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-2">
                          <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
                          <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>
                        <div className="md:mt-0 mt-4">
                          <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark size-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a>
                          <a href="" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                      </div>
                      <div className="group relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-700 transition-all duration-500 p-6 bg-white">
                        <div className="flex items-center">
                          <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/com-logo-1.jpg" className="size-14" alt="" />
                          </div>
                          <a href="job-detail-two.html" className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]">Marketing Director</a>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-4">
                          <span className="block"><span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">Part Time</span></span>
                          <span className="block text-slate-400 text-sm md:mt-1 mt-0"><i className="uil uil-clock"></i> 20th Feb 2023</span>
                        </div>
                        <div className="md:block flex justify-between md:mt-0 mt-2">
                          <span className="text-slate-400"><i className="uil uil-map-marker"></i> USA</span>
                          <span className="block font-semibold md:mt-1 mt-0">$4,000 - $4,500</span>
                        </div>
                        <div className="md:mt-0 mt-4">
                          <a href="" className="btn btn-icon rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark size-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg></a>
                          <a href="" className="btn rounded-md bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto">Apply Now</a>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="grid grid-cols-1">
                          <div className="text-center">
                            <a href="job-categories.html" className="btn text-white border-transparent btn focus:ring focus:ring-custom-500/20 bg-[#1caf57]">View More  <i className="uil uil-arrow-right ms-1"></i></a>
                          </div>
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
        </main>
      </div>
    )
  }}</Observer>
}

export default Home;
