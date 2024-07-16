import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessTitle from "@/components/BusinessTitle/BusinessTitle";
import BusinessDesc from "@/components/BusinessDesc/BusinessDesc";
import BusinessInfo from "@/components/BusinessInfo/BusinessInfo";
import businessImage from 'assets/temp/logo12.jpg';

const BusinessProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const mockBusiness = {
    email: "info@techcorp.com",
    profile: {
      name: "TechCorp Solutions",
      avatar: businessImage,
      description: "TechCorp Solutions is a leading innovator in the tech industry, specializing in cutting-edge software solutions and digital transformation services. Founded in 2010, we've grown from a small startup to a global player, serving clients across various sectors. Our team of expert developers, designers, and consultants work tirelessly to deliver top-notch products and services that drive business growth and efficiency. At TechCorp, we believe in the power of technology to solve complex problems and create new opportunities. Our commitment to excellence and continuous innovation has earned us a reputation as a trusted partner for businesses looking to thrive in the digital age.",
      website: "https://www.techcorp-solutions.com",
      slogan: "Innovating for a Digital Future",
      employees: "500-1000",
      industry: "Information Technology",
      phone: "+1 (555) 123-4567",
      city: "San Francisco, CA",
      address: "123 Tech Street, San Francisco, CA 94105",
      socialMedia: {
        facebook: "https://facebook.com/techcorp",
        twitter: "https://twitter.com/techcorp",
        linkedin: "https://linkedin.com/company/techcorp"
      }
    }
  };

  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img src={businessImage} alt="Business-Banner" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Company Profile</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-20 bg-light">
        <div className="container">
          <div className="lg:grid grid-cols-12 gap-6">
            <div className="col-span-8">
              <BusinessTitle
                name={mockBusiness.profile.name}
                avatar={mockBusiness.profile.avatar}
                slogan={mockBusiness.profile.slogan}
              />
              <BusinessDesc
                description={mockBusiness.profile.description}
              />
            </div>
            <div className="col-span-4">
              <BusinessInfo
                website={mockBusiness.profile.website}
                employees={mockBusiness.profile.employees}
                industry={mockBusiness.profile.industry}
                phone={mockBusiness.profile.phone}
                city={mockBusiness.profile.city}
                address={mockBusiness.profile.address}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default BusinessProfile;