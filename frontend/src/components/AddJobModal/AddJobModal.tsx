import React from 'react';
import { Job } from '@/stores/jobStore';

interface AddJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (job: Partial<Job>) => void;
    job: Partial<Job> | null;
    setJob: (job: Partial<Job>) => void;
}

const employmentTypes = ['Fulltime', 'Parttime', 'Internship', 'Remote', 'Contract'];

const jobCategories = [
    { _id: "6685109142e0602b2581fb85", name: "Marketing" },
    { _id: "6685109142e0602b2581fb86", name: "Customer Service" },
    { _id: "6685109142e0602b2581fb87", name: "Human Resource" },
    { _id: "6685109142e0602b2581fb88", name: "Project Management" },
    { _id: "6685109142e0602b2581fb89", name: "Business Development" },
    { _id: "6685109142e0602b2581fb8a", name: "Programming" },
    { _id: "6685109142e0602b2581fb8b", name: "Teaching & Education" },
    { _id: "6685109142e0602b2581fb8c", name: "Design & Creative" }
];

const AddJobModal: React.FC<AddJobModalProps> = ({ isOpen, onClose, onSave, job, setJob }) => {
    if (!isOpen || !job) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(job);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-full max-w-4xl mx-auto my-6">
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                {job._id ? 'Edit Job' : 'Create Job'}
                            </h3>
                            {/* <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button> */}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative p-6 flex-auto max-h-[calc(100vh-200px)] overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Job Title</label>
                                        <input
                                            type="text"
                                            value={job.jobTitle || ''}
                                            onChange={(e) => setJob({ ...job, jobTitle: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Location</label>
                                        <input
                                            type="text"
                                            value={job.location || ''}
                                            onChange={(e) => setJob({ ...job, location: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Salary</label>
                                        <input
                                            type="text"
                                            value={job.salary || ''}
                                            onChange={(e) => setJob({ ...job, salary: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Business Logo URL</label>
                                        <input
                                            type="text"
                                            value={job.businessLogoUrl || ''}
                                            onChange={(e) => setJob({ ...job, businessLogoUrl: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                        />
                                    </div>
                                    <div className="mb-4 col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea
                                            value={job.description || ''}
                                            onChange={(e) => setJob({ ...job, description: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                            rows={4}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                        <select
                                            value={job.categoryId || ''}
                                            onChange={(e) => setJob({ ...job, categoryId: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            {jobCategories.map((category) => (
                                                <option key={category._id} value={category._id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">Expire Date</label>
                                        <input
                                            type="date"
                                            value={job.expiredAt ? new Date(job.expiredAt).toISOString().split('T')[0] : ''}
                                            onChange={(e) => setJob({ ...job, expiredAt: e.target.value })}
                                            className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                                        <div className="mt-2 flex flex-wrap">
                                            {employmentTypes.map((type: string) => (
                                                <label key={type} className="inline-flex items-center mr-4 mb-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={job.employmentType?.includes(type) || false}
                                                        onChange={(e) => {
                                                            const updatedTypes = e.target.checked
                                                                ? [...(job.employmentType || []), type]
                                                                : (job.employmentType || []).filter((t: string) => t !== type);
                                                            setJob({ ...job, employmentType: updatedTypes });
                                                        }}
                                                        className="form-checkbox h-5 w-5 text-themePrimary"
                                                    />
                                                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-themePrimary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddJobModal;