import React, { useEffect } from 'react';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Banner } from './Banner';
import { Category } from './Category';
import about1 from '../../assets/img/about1.jpg';
import about2 from '../../assets/img/about2.jpg';
import article1 from '../../assets/img/article1.jpg';
import article2 from '../../assets/img/article2.jpg';
import article3 from '../../assets/img/article3.jpg';
import { ListJobs } from './ListJobs';

const Home: React.FC = () => {
  const { commonStore } = useStore();

  useEffect(() => {
    async function loadTags() {
      // await commonStore.loadTags();
    }
    loadTags();
  }, [commonStore]);

  return <Observer>{() => {
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
                      <a href="/contact-us" className="md:w-28 block bg-themePrimary text-white px-4 py-4 text-xs font-medium rounded-md hover:bg-black transition-all outline-none">
                        <i className="fa-regular fa-envelope"></i> Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Listed Jobs */}
          <ListJobs />

          {/* Blog */}
          <section className="py-16 md:py-20 lg:py-24 bg-white">
            <div className="container">
              <div className="text-center mb-14">
                <p className="text-black font-bold text-3xl leading-none mb-1">Our Blog</p>
                <h2 className="text-xl font-medium text-black">See How You Can Up Your Career Status</h2>
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