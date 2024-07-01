import React from 'react';
import BusinessCard from './BusinessCard/BusinessCard';
import BusinessFilter from './BusinessFilter/BusinessFilter';
import business from '../../assets/img/business.jpg';
import logo1 from '../../assets/temp/logo1.jpg';
import logo2 from '../../assets/temp/logo2.jpg';
import logo3 from '../../assets/temp/logo3.jpg';
import logo4 from '../../assets/temp/logo4.png';
import logo5 from '../../assets/temp/logo5.jpg';
import logo6 from '../../assets/temp/logo6.jpg';
import logo7 from '../../assets/temp/logo7.jpg';
import logo8 from '../../assets/temp/logo8.jpg';
import logo9 from '../../assets/temp/logo9.jpg';
import logo10 from '../../assets/temp/logo10.png';
import logo11 from '../../assets/temp/logo11.jpg';
import logo12 from '../../assets/temp/logo12.jpg';
import logo13 from '../../assets/temp/logo13.png';
import logo14 from '../../assets/temp/logo14.png';
import logo15 from '../../assets/temp/logo15.jpg';

// Mock database
const mockBusinesses = [
  {
    _id: 1,
    roleId: { $oid: "66627f747573d122a0410137" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6a" },
      name: "X company",
      avatar: logo1,
      slogan: "Get it done with love",
      description: "",
      website: "https://xcompany.com",
      industry: "Technology",
      phone: "+1234567890",
      city: "New York",
      address: "123 Tech Street",
      employees: "51-100"
    },
  },
  {
    _id: 2,
    roleId: { $oid: "66627f747573d122a0410138" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6b" },
      name: "Y Solutions",
      avatar: logo2,
      slogan: "Innovate with passion",
      description: "",
      website: "https://ysolutions.com",
      industry: "Consulting",
      phone: "+1987654321",
      city: "San Francisco",
      address: "456 Innovation Avenue",
      employees: "101-500"
    },
  },
  {
    _id: 3,
    roleId: { $oid: "66627f747573d122a0410139" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6c" },
      name: "Z Retailers",
      avatar: logo3,
      slogan: "Shop with confidence",
      description: "",
      website: "https://zretailers.com",
      industry: "Retail",
      phone: "+1478523690",
      city: "Chicago",
      address: "789 Market Plaza",
      employees: "201-1000"
    },
  },
  {
    _id: 4,
    roleId: { $oid: "66627f747573d122a0410140" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6d" },
      name: "HealthCare Inc.",
      avatar: logo4,
      slogan: "Your health, our priority",
      description: "",
      website: "https://healthcareinc.com",
      industry: "Healthcare",
      phone: "+1098765432",
      city: "Los Angeles",
      address: "321 Health Blvd",
      employees: "1001-5000"
    },
  },
  {
    _id: 5,
    roleId: { $oid: "66627f747573d122a0410141" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6e" },
      name: "EcoWorld",
      avatar: logo5,
      slogan: "Sustainable living",
      description: "",
      website: "https://ecoworld.com",
      industry: "Environmental",
      phone: "+1567890432",
      city: "Seattle",
      address: "654 Green Street",
      employees: "11-50"
    },
  },
  {
    _id: 6,
    roleId: { $oid: "66627f747573d122a0410142" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6f" },
      name: "FinancePro",
      avatar: logo6,
      slogan: "Your money, managed well",
      description: "",
      website: "https://financepro.com",
      industry: "Finance",
      phone: "+1346792580",
      city: "Boston",
      address: "987 Financial Road",
      employees: "501-1000"
    },
  },
  {
    _id: 7,
    roleId: { $oid: "66627f747573d122a0410143" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f70" },
      name: "EduFuture",
      avatar: logo7,
      slogan: "Learning for tomorrow",
      description: "",
      website: "https://edufuture.com",
      industry: "Education",
      phone: "+1234908765",
      city: "Austin",
      address: "123 Learning Lane",
      employees: "101-500"
    },
  },
  {
    _id: 8,
    roleId: { $oid: "66627f747573d122a0410144" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f71" },
      name: "Creative Minds",
      avatar: logo8,
      slogan: "Design your world",
      description: "",
      website: "https://creativeminds.com",
      industry: "Design",
      phone: "+1402678391",
      city: "Miami",
      address: "321 Art Street",
      employees: "51-100"
    },
  },
  {
    _id: 9,
    roleId: { $oid: "66627f747573d122a0410145" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f72" },
      name: "TravelCo",
      avatar: logo9,
      slogan: "Explore the world",
      description: "",
      website: "https://travelco.com",
      industry: "Travel",
      phone: "+1789456123",
      city: "Denver",
      address: "456 Adventure Ave",
      employees: "51-200"
    },
  },
  {
    _id: 10,
    roleId: { $oid: "66627f747573d122a0410146" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f73" },
      name: "Culinary Delight",
      avatar: logo10,
      slogan: "Taste the difference",
      description: "",
      website: "https://culinarydelight.com",
      industry: "Food & Beverage",
      phone: "+1678394021",
      city: "New Orleans",
      address: "789 Culinary Court",
      employees: "201-500"
    },
  },
  // Add more businesses if needed, each with a unique logo (logo11, logo12, etc.)
  {
    _id: 11,
    roleId: { $oid: "66627f747573d122a0410147" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f74" },
      name: "TechGiant",
      avatar: logo11,
      slogan: "Innovate the future",
      description: "",
      website: "https://techgiant.com",
      industry: "Technology",
      phone: "+1123456789",
      city: "Silicon Valley",
      address: "123 Tech Park",
      employees: "5000+"
    },
  },
  {
    _id: 12,
    roleId: { $oid: "66627f747573d122a0410148" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f75" },
      name: "HealthFirst",
      avatar: logo12,
      slogan: "Care with compassion",
      description: "",
      website: "https://healthfirst.com",
      industry: "Healthcare",
      phone: "+1987654322",
      city: "Houston",
      address: "456 Wellness Way",
      employees: "500-1000"
    },
  },
  {
    _id: 13,
    roleId: { $oid: "66627f747573d122a0410149" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f76" },
      name: "GreenEnergy",
      avatar: logo13,
      slogan: "Powering the planet",
      description: "",
      website: "https://greenenergy.com",
      industry: "Energy",
      phone: "+1678394022",
      city: "Dallas",
      address: "789 Solar Street",
      employees: "100-500"
    },
  },
  {
    _id: 14,
    roleId: { $oid: "66627f747573d122a0410150" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f77" },
      name: "FutureFin",
      avatar: logo14,
      slogan: "Finance for the future",
      description: "",
      website: "https://futurefin.com",
      industry: "Finance",
      phone: "+1346792581",
      city: "San Diego",
      address: "987 Economy Blvd",
      employees: "200-500"
    },
  },
  {
    _id: 15,
    roleId: { $oid: "66627f747573d122a0410151" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f78" },
      name: "EduWorld",
      avatar: logo15,
      slogan: "Education for all",
      description: "",
      website: "https://eduworld.com",
      industry: "Education",
      phone: "+1234908766",
      city: "Philadelphia",
      address: "123 University Ave",
      employees: "50-200"
    },
  },
];

const Businesses: React.FC = () => {
  return (
    <>
      <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
        <img src={business} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
        <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
        <div className="container p-16 relative z-3">
          <div className="w-10/12 m-auto pt-10 pb-7">
            <div className="text-center">
              <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">All Businesses</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-20 !bg-light">
        <div className='container 2xl:px-0'>
          <div className="xl:grid grid-cols-12 gap-6">
            <div className='col-span-3'>
              <BusinessFilter />
            </div>
            <div className='col-span-9'>
              <div className='grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                {mockBusinesses.map((business) => (
                  <BusinessCard
                    key={business._id}
                    name={business.profile.name}
                    slogan={business.profile.slogan}
                    description={business.profile.description}
                    employees={business.profile.employees}
                    city={business.profile.city}
                    avatar={business.profile.avatar}
                  />
                ))}
              </div>
              <div className='mx-auto px-4 mt-10'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Businesses;