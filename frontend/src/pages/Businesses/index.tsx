import React from 'react';
import BusinessCard from './BusinessCard/BusinessCard';
import BusinessFilter from './BusinessFilter/BusinessFilter';
import business from '../../assets/img/business.jpg'

// Mock database
const mockBusinesses = [
  {
    _id: 1,
    roleId: { $oid: "66627f747573d122a0410137" },
    profile: {
      _id: { $oid: "66794a73d5b8d77104564f6a" },
      name: "X company",
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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
      avatar: "https://via.placeholder.com/100",
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