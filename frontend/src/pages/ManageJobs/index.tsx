import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/store';
import toast from 'react-hot-toast';
import AddJobModal from '@/components/AddJobModal/AddJobModal';
import { Job } from '@/stores/jobStore';

const ManageJobs: React.FC = observer(() => {
    const { jobStore, userStore } = useStore();
    const [selectedJob, setSelectedJob] = useState<Partial<Job> | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (userStore.currentUser) {
            jobStore.getUserJobs(userStore.currentUser._id);
        }
    }, [jobStore, userStore.currentUser]);

    const handleAddJob = () => {
        setSelectedJob({
            jobTitle: '',
            description: '',
            location: '',
            salary: '',
            businessLogoUrl: '',
            employmentType: [],
            expiredAt: '',
        });
        setIsModalOpen(true);
    };

    const handleEditJob = (job: Job) => {
        setSelectedJob({ ...job });
        setIsModalOpen(true);
    };

    const handleDeleteJob = async (jobId: string) => {
        if (window.confirm("Are you sure you want to delete this job?")) {
            try {
                await jobStore.deleteJob(jobId);
                // Refresh the job list after successful deletion
                if (userStore.currentUser) {
                    jobStore.getUserJobs(userStore.currentUser._id);
                }
            } catch (error) {
                console.error("Error deleting job:", error);
                toast.error("Cannot delete job! Something went wrong.")
            }
        }
    };

    const handleSaveJob = async (job: Partial<Job>) => {
        try {
          if (job._id) {
            await jobStore.updateJob(job._id, job);
          } else {
            await jobStore.createJob(job);
          }
          setIsModalOpen(false);
          // Refresh the job list after successful update/create
          if (userStore.currentUser) {
            jobStore.getUserJobs(userStore.currentUser._id);
          }
        } catch (error) {
          console.error("Error saving job:", error);
          toast.error('Cannot save the job! Something went wrong.')
        }
      };

    const filteredJobs = jobStore.jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="rounded-lg shadow-lg bg-white">
            <div className="h-16 bg-themeDark mb-8 flex items-center px-10 rounded-lg">
                <p className="text-xxs text-white">Manage All Jobs</p>
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
});

export default ManageJobs;