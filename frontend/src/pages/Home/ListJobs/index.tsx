import React, { useEffect } from "react";
import { useStore } from "@/store";
import { Observer } from "mobx-react-lite";
import LoadingSpinner from "@/components/LoadingSpinner";
import TabList from '@/components/Tabs/TabList';
import TabItem from '@/components/Tabs/TabItem';
import JobCard from '@components/JobCard/JobCard';

export function ListJobs() {
    const { jobStore } = useStore();

    useEffect(() => {
        jobStore.loadJobs();
    }, [jobStore]);

    return <Observer>{() => {
        const { loading, jobs, error } = jobStore;
        if (loading) {
            return <LoadingSpinner />;
        } else if (jobs) {
            return (
                <section className="py-16 md:py-20 lg:py-24 !bg-light">
                    <div className="container">
                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-bold text-black">Popular Listed jobs</h2>
                            <TabList classCss='flex gap-2 justify-center p-2' activeTabIndex={0}>
                                <TabItem label="Featured">
                                    <div className="grid gap-6 xl:gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-normal sm:justify-center">
                                        {jobs.map((job) => (
                                            <JobCard key={job._id} job={job} />
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <div className="grid grid-cols-1">
                                            <div className="text-center">
                                                <a href="/jobs" className="btn text-white border-transparent btn focus:ring focus:ring-custom-500/20 bg-[#1caf57]">View More  <i className="uil uil-arrow-right ms-1"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </TabItem>
                                <TabItem label="Full Time">
                                    <p>Full Time</p>
                                </TabItem>
                                <TabItem label="Part Time">
                                    <p>Part Time</p>
                                </TabItem>
                            </TabList>
                        </div>
                    </div>
                </section>
            )
        } else {
            return null;
        }
    }}</Observer>
}