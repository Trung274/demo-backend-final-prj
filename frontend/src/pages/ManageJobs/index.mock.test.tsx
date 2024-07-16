import React, { useState } from 'react';
import AddJobModal from '@/components/AddJobModal/AddJobModal';

// Mock data for jobs
const initialJobs = [
    {
        _id: '1',
        jobTitle: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        employmentType: ['fulltime', 'remote'],
        expiredAt: '2024-07-01T00:00:00.000Z',
    },
    {
        _id: '2',
        jobTitle: 'UX Designer',
        location: 'New York, NY',
        employmentType: ['fulltime'],
        expiredAt: '2024-06-30T00:00:00.000Z',
    },
    {
        _id: '3',
        jobTitle: 'Data Scientist',
        location: 'Seattle, WA',
        employmentType: ['fulltime', 'internship'],
        expiredAt: '2024-07-15T00:00:00.000Z',
    },
    {
        _id: '4',
        jobTitle: 'Frontend Developer',
        location: 'Los Angeles, CA',
        employmentType: ['contract', 'remote'],
        expiredAt: '2024-07-10T00:00:00.000Z',
    },
    {
        _id: '5',
        jobTitle: 'Marketing Specialist',
        location: 'Chicago, IL',
        employmentType: ['part-time', 'remote'],
        expiredAt: '2024-07-05T00:00:00.000Z',
    },
    {
        _id: '6',
        jobTitle: 'Environmental Scientist',
        location: 'Denver, CO',
        employmentType: ['fulltime', 'internship'],
        expiredAt: '2024-07-20T00:00:00.000Z',
    },
    {
        _id: '7',
        jobTitle: 'Diversity and Inclusion Manager',
        location: 'Boston, MA',
        employmentType: ['fulltime', 'remote'],
        expiredAt: '2024-07-12T00:00:00.000Z',
    },
    // Feel free to customize further!
];

const MockManageJobs: React.FC = () => {
    const [jobs, setJobs] = useState(initialJobs);
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddJob = () => {
        setSelectedJob({
            jobTitle: '',
            description: '',
            location: '',
            salary: '',
            employmentType: [],
            expiredAt: '',
        });
        setIsModalOpen(true);
    };

    const handleEditJob = (job: any) => {
        setSelectedJob({ ...job });
        setIsModalOpen(true);
    };

    const handleDeleteJob = (jobId: string) => {
        setJobs(jobs.filter(job => job._id !== jobId));
    };

    const handleSaveJob = (job: any) => {
        if (job._id) {
            setJobs(jobs.map(j => (j._id === job._id ? job : j)));
        } else {
            const newJob = { ...job, _id: Date.now().toString() };
            setJobs([...jobs, newJob]);
        }
        setIsModalOpen(false);
    };

    const filteredJobs = jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="rounded-lg shadow-lg bg-white">
            <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
                <p className="text-xxs text-white">Manage Jobs</p>
            </div>
            <main className="flex-grow mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={handleAddJob}
                        className="bg-themePrimary hover:bg-neutral-950 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Job
                    </button>
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="border rounded py-2 px-3 w-64"
                    />
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employment Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expire Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredJobs.map((job) => (
                                <tr key={job._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.jobTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{job.employmentType.join(', ')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{new Date(job.expiredAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onClick={() => handleEditJob(job)} className="text-themePrimary hover:text-blue-900 mr-2">Edit</button>
                                        <button onClick={() => handleDeleteJob(job._id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <AddJobModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveJob}
                job={selectedJob}
                setJob={setSelectedJob}
            />
        </div>
    );
};

export default MockManageJobs;