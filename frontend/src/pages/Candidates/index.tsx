import React from 'react';
import CandidateCard from './CandidateCard/CandidateCard';
import candidate from '../../assets/img/candidate.jpg';
import person1 from '../../assets/temp/person1.jpg';
import person2 from '../../assets/temp/person2.jpg';
import person3 from '../../assets/temp/person3.jpg';
import person4 from '../../assets/temp/person4.jpg';
import person5 from '../../assets/temp/person5.jpg';
import person6 from '../../assets/temp/person6.jpg';
import person7 from '../../assets/temp/person7.jpg';
import person8 from '../../assets/temp/person8.jpg';
import person9 from '../../assets/temp/person9.jpg';
import person10 from '../../assets/temp/person10.jpg';

// Mock database
const mockUsers = [
  {
    _id: { $oid: "66794a73d5b8d77104564f6a" },
    profile: {
      name: "Shanya Chaturvedi",
      avatar: person1,
      city: "New York",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6b" },
    profile: {
      name: "John Doe",
      avatar: person2,
      city: "London",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6c" },
    profile: {
      name: "Jane Smith",
      avatar: person3,
      city: "Paris",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6d" },
    profile: {
      name: "Carlos Hernandez",
      avatar: person4,
      city: "Madrid",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6e" },
    profile: {
      name: "Akira Yamamoto",
      avatar: person5,
      city: "Tokyo",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6f" },
    profile: {
      name: "Maria Rossi",
      avatar: person6,
      city: "Rome",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f70" },
    profile: {
      name: "Liam O'Connor",
      avatar: person7,
      city: "Dublin",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f71" },
    profile: {
      name: "Elena Petrova",
      avatar: person8,
      city: "Moscow",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f72" },
    profile: {
      name: "Pierre Dubois",
      avatar: person9,
      city: "Montreal",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f73" },
    profile: {
      name: "Fatima Al-Mansouri",
      avatar: person10,
      city: "Dubai",
    },
  },
];

const Candidates: React.FC = () => {
  return (
    <>
    <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
                <img src={candidate} alt="Contact-Us" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
                <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
                <div className="container p-16 relative z-3">
                    <div className="w-10/12 m-auto pt-10 pb-7">
                        <div className="text-center">
                            <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Candidate List</h1>
                        </div>
                    </div>
                </div>
            </section>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Candidate List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockUsers.map((user) => (
          <CandidateCard
            key={user._id.$oid}
            id={user._id.$oid}
            name={user.profile.name}
            avatar={user.profile.avatar}
            city={user.profile.city}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Candidates;