import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faBuilding, faBriefcase, faBookmark } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Users', value: 1250, icon: faUserTie },
    { title: 'Active Businesses', value: 483, icon: faBuilding },
    { title: 'Open Jobs', value: 729, icon: faBriefcase },
    { title: 'Saved Jobs', value: 156, icon: faBookmark },
  ];

  return (
    <div className="container flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
          <p className="text-gray-600">Here's an overview of your platform's current status:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
                <FontAwesomeIcon icon={stat.icon} className="text-themePrimary text-2xl" />
              </div>
              <p className="text-3xl font-bold text-themePrimary">{stat.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {[
                "New user registered: John Doe",
                "Job posted: Senior Software Engineer at TechCorp",
                "Business profile updated: InnovateTech Solutions",
                "User applied to job: UX Designer at DesignMasters",
                "New review submitted for JobConnect platform"
              ].map((activity, index) => (
                <li key={index} className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{activity}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;