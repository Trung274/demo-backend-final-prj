import React from "react";
import about3 from '../../assets/img/about3.jpg'
import article1 from '../../assets/img/article1.jpg'
import article2 from '../../assets/img/article2.jpg'
import article3 from '../../assets/img/article3.jpg'

const AboutPage = () => {
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img src={about3} alt="About-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We strive to connect talented individuals with their dream jobs, fostering growth and innovation in the professional world.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 mb-16">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h3>
              <p className="text-gray-600 mb-6">
                JobHub is a leading job search platform dedicated to bridging the gap between employers and job seekers. With our innovative approach and cutting-edge technology, we aim to revolutionize the hiring process.
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Founded in 2024</li>
                <li>Over 1 hundred successful placements</li>
                <li>Present in 50+ countries</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img src={about3} alt="Team" className="rounded-lg shadow-md w-full h-auto" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <div className="flex flex-wrap justify-center -mx-4">
              {["Integrity", "Innovation", "Collaboration", "Excellence"].map((value, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{value}</h4>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Meet Our Team</h3>
            <div className="flex flex-wrap justify-center -mx-4">
              {[
                { name: "John Doe", role: "CEO", image: article1 },
                { name: "Jane Smith", role: "CTO", image: article2 },
                { name: "Mike Johnson", role: "Head of HR", image: article3 },
              ].map((member, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage;