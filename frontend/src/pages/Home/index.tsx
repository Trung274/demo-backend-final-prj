import React, { useEffect } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Banner } from './Banner';
import { Category } from './Category';

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
                      <img src="https://demo.htmlcodex.com/2246/job-portal-website-template/img/about-1.jpg" className="lg:w-[400px] w-[280px] rounded-md shadow dark:shadow-gray-700" alt="" />

                    </div>
                    <div className="absolute md:-end-5 end-0 -bottom-16">
                      <img src="https://shreethemes.in/jobstack/layouts/assets/images/about/ab02.jpg" className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-md shadow dark:shadow-gray-700" alt="" />
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
                      <a href="/contactus" className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white mt-2 rounded-md">
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
                
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }}</Observer>
}

export default Home;