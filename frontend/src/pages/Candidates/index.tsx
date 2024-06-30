import React from 'react';
import CandidateCard from './CandidateCard/CandidateCard';
import candidate from '../../assets/img/candidate.jpg'

// Mock database
const mockUsers = [
  {
    _id: { $oid: "66794a73d5b8d77104564f6a" },
    profile: {
      name: "Shanya Chaturvedi",
      avatar: "/assets/img/pic5.png",
      city: "New York",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6b" },
    profile: {
      name: "John Doe",
      avatar: "/assets/img/pic1.png",
      city: "London",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6c" },
    profile: {
      name: "Jane Smith",
      avatar: "/assets/img/pic2.png",
      city: "Paris",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6d" },
    profile: {
      name: "Carlos Hernandez",
      avatar: "/assets/img/pic3.png",
      city: "Madrid",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6e" },
    profile: {
      name: "Akira Yamamoto",
      avatar: "/assets/img/pic4.png",
      city: "Tokyo",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f6f" },
    profile: {
      name: "Maria Rossi",
      avatar: "/assets/img/pic6.png",
      city: "Rome",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f70" },
    profile: {
      name: "Liam O'Connor",
      avatar: "/assets/img/pic7.png",
      city: "Dublin",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f71" },
    profile: {
      name: "Elena Petrova",
      avatar: "/assets/img/pic8.png",
      city: "Moscow",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f72" },
    profile: {
      name: "Pierre Dubois",
      avatar: "/assets/img/pic9.png",
      city: "Montreal",
    },
  },
  {
    _id: { $oid: "66794a73d5b8d77104564f73" },
    profile: {
      name: "Fatima Al-Mansouri",
      avatar: "/assets/img/pic10.png",
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
                            <h1 className="text-xxl xl:text-xxxl font-bold text-white text-center leading-none mb-6">Candidate List</h1>
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