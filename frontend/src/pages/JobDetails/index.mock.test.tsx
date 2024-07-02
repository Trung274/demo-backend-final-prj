import React from "react";
import JobTitle from "@/components/JobTitle/JobTitle";
import JobDesc from "@/components/JobDesc/JobDesc";
import JobOverview from "@/components/JobOverview/JobOverview";
import jobImage from 'assets/temp/logo10.png';

const MockJobPage: React.FC = () => {
    // Mock job database
    const mockJob = {
        _id: "5f9d5a3b9d3e2a1b1c9d5a3d",
        jobTitle: "Senior Software Engineer",
        description: "We are looking for an experienced software engineer to join our dynamic team. The ideal candidate will have a strong background in full-stack development, with expertise in modern web technologies and cloud platforms. You will be responsible for designing, implementing, and maintaining complex software systems that power our innovative products.",
        userId: "5f9d5a3b9d3e2a1b1c9d5a3b",
        location: "San Francisco, CA",
        businessLogoUrl: jobImage,
        salary: "$120,000 - $150,000 per year",
        employmentType: ["Fulltime", "Remote"],
        createdAt: "2022-07-01T00:00:00.000Z",
        updatedAt: "2022-12-01T00:00:00.000Z",
        categoryId: "Software Engineering",
        expiredAt: "2023-07-01T00:00:00.000Z"
    };

    return (
        <>
            <section className="relative bg-cover bg-center bg-no-repeat" style={{ position: 'relative' }}>
                <img src={jobImage} alt="Job-Banner" className="absolute w-full h-full object-cover top-0 left-0 z-1" style={{ opacity: 0.5 }} />
                <div className="absolute w-full h-full left-0 top-0 z-2" style={{ backgroundColor: 'rgba(0, 124, 50, 0.7)' }}></div>
                <div className="container p-16 relative z-3">
                    <div className="w-10/12 m-auto pt-10 pb-7">
                        <div className="text-center">
                            <h1 className="text-5xl xl:text-6xl font-bold text-white text-center leading-none mb-3">Job Details</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-12 pb-20 bg-light">
                <div className="container">
                    <div className="lg:grid grid-cols-12 gap-6">
                        <div className="col-span-8">
                            <JobTitle
                                jobTitle={mockJob.jobTitle}
                                businessLogoUrl={mockJob.businessLogoUrl}
                                businessId={mockJob.userId}
                            />
                            <JobDesc
                                description={mockJob.description}
                            />
                        </div>
                        <div className="col-span-4">
                            <JobOverview
                                createdAt={mockJob.createdAt}
                                expiredAt={mockJob.expiredAt}
                                employmentType={mockJob.employmentType}
                                categoryId={mockJob.categoryId}
                                salary={mockJob.salary}
                                location={mockJob.location}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MockJobPage;