import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../agent';

export interface Job {
  _id: string;
  jobTitle: string;
  description: string;
  userId: string;
  location: string;
  businessLogoUrl: string;
  salary: string;
  employmentType: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  expiredAt: string;
}

export class JobStore {
  jobs: Job[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (state: boolean) => {
    this.loading = state;
  }

  setError = (error: string | null) => {
    this.error = error;
  }

  loadJobs = async (page: number = 1, limit: number = 10) => {
    this.setLoading(true);
    try {
      const jobs = await agent.Jobs.all(page, limit);
      runInAction(() => {
        this.jobs = jobs;
        this.setLoading(false);
      });
    } catch (error) {
      console.error('Failed to fetch jobs', error);
      runInAction(() => {
        this.setError('Failed to fetch jobs');
        this.setLoading(false);
      });
    }
  };

  createJob = async (jobData: Partial<Job>) => {
    this.setLoading(true);
    try {
      const job = await agent.Jobs.create(jobData);
      runInAction(() => {
        this.jobs.push(job);
        this.setLoading(false);
      });
      return job;
    } catch (error) {
      console.error('Failed to create job', error);
      runInAction(() => {
        this.setError('Failed to create job');
        this.setLoading(false);
      });
    }
  };

  updateJob = async (jobId: string, jobData: Partial<Job>) => {
    this.setLoading(true);
    try {
      const updatedJob = await agent.Jobs.update(jobId, jobData);
      runInAction(() => {
        const index = this.jobs.findIndex(job => job._id === jobId);
        if (index !== -1) {
          this.jobs[index] = updatedJob;
        }
        this.setLoading(false);
      });
      return updatedJob;
    } catch (error) {
      console.error('Failed to update job', error);
      runInAction(() => {
        this.setError('Failed to update job');
        this.setLoading(false);
      });
    }
  };

  getJobById = async (jobId: string) => {
    this.setLoading(true);
    try {
      const job = await agent.Jobs.get(jobId);
      runInAction(() => {
        this.setLoading(false);
      });
      return job;
    } catch (error) {
      console.error('Failed to fetch job', error);
      runInAction(() => {
        this.setError('Failed to fetch job');
        this.setLoading(false);
      });
    }
  };

  deleteJob = async (jobId: string) => {
    this.setLoading(true);
    try {
      await agent.Jobs.del(jobId);
      runInAction(() => {
        this.jobs = this.jobs.filter(job => job._id !== jobId);
        this.setLoading(false);
      });
    } catch (error) {
      console.error('Failed to delete job', error);
      runInAction(() => {
        this.setError('Failed to delete job');
        this.setLoading(false);
      });
    }
  };

  getUserJobs = async (userId: string, page: number = 1, limit: number = 10) => {
    this.setLoading(true);
    try {
      const jobs = await agent.Jobs.byUser(userId, page, limit);
      runInAction(() => {
        this.jobs = jobs;
        this.setLoading(false);
      });
      return jobs;
    } catch (error) {
      console.error('Failed to fetch user jobs', error);
      runInAction(() => {
        this.setError('Failed to fetch user jobs');
        this.setLoading(false);
      });
    }
  };

  searchJobs = async (params: { query?: string; location?: string; categoryId?: string; employmentType?: string[]; page?: number; limit?: number }) => {
    this.setLoading(true);
    try {
      const jobs = await agent.Jobs.search(params);
      runInAction(() => {
        this.jobs = jobs;
        this.setLoading(false);
      });
      return jobs;
    } catch (error) {
      console.error('Failed to search jobs', error);
      runInAction(() => {
        this.setError('Failed to search jobs');
        this.setLoading(false);
      });
    }
  };
}

export default new JobStore();