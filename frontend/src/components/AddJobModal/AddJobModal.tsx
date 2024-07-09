import React from 'react';

interface AddJobModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (job: any) => void;
    job: any;
    setJob: (job: any) => void;
}

const employmentTypes = ['fulltime', 'parttime', 'internship', 'remote', 'contract'];

const AddJobModal: React.FC<AddJobModalProps> = ({ isOpen, onClose, onSave, job, setJob }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(job);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-md mx-auto my-6">
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                {job._id ? 'Edit Job' : 'Create Job'}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={onClose}
                            >
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative p-6 flex-auto">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                                    <input
                                        type="text"
                                        value={job.jobTitle}
                                        onChange={(e) => setJob({ ...job, jobTitle: e.target.value })}
                                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Description</label>
                                    <textarea
                                        value={job.description}
                                        onChange={(e) => setJob({ ...job, description: e.target.value })}
                                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        type="text"
                                        value={job.location}
                                        onChange={(e) => setJob({ ...job, location: e.target.value })}
                                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Salary</label>
                                    <input
                                        type="text"
                                        value={job.salary}
                                        onChange={(e) => setJob({ ...job, salary: e.target.value })}
                                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                                    <div className="mt-2">
                                        {employmentTypes.map((type: string) => (
                                            <label key={type} className="inline-flex items-center mr-4">
                                                <input
                                                    type="checkbox"
                                                    checked={job.employmentType.includes(type)}
                                                    onChange={(e) => {
                                                        const updatedTypes = e.target.checked
                                                            ? [...job.employmentType, type]
                                                            : job.employmentType.filter((t: string) => t !== type);
                                                        setJob({ ...job, employmentType: updatedTypes });
                                                    }}
                                                    className="form-checkbox h-5 w-5 text-themePrimary"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Expire Date</label>
                                    <input
                                        type="datetime-local"
                                        value={job.expiredAt ? job.expiredAt.slice(0, 16) : ''}
                                        onChange={(e) => setJob({ ...job, expiredAt: e.target.value })}
                                        className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3"
                                    />
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