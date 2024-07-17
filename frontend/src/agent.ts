import superagentPromise from 'superagent-promise';
import _superagent, { ResponseError, Request, Response } from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';
import { Job } from './stores/jobStore';
import qs from 'query-string';
import { User } from './stores/userStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_API_ROOT;

const encode = encodeURIComponent;

const handleErrors = (err: ResponseError) => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout();
  }
  return err;
};

const responseBody = (res: Response) => res.body;

const tokenPlugin = (req: Request) => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`);
  }
};

const requests = {
  del: (url: string) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url: string) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Auth = {
  current: () => requests.get('/users/me'),
  login: (email: string, password: string) => requests.post('/login', { email, password }),
  register: (firstName: string, lastName: string, email: string, password: string, roleId: string) =>
    requests.post('/users/create', {
      firstName,
      lastName,
      email,
      password,
      roleId,
      profile: {}
    }),
  save: (user: any) => requests.put('/user', { user }),
  updateProfile: (profileData: Partial<User>) => requests.put('/users/updateProfile', profileData)
};

const Users = {
  all: () => requests.get('/users'),
  delete: (userId: string) => requests.del(`/users/delete/${userId}`),
  getById: (userId: string) => requests.get(`/users/select/${userId}`),
  getUsesByType: (type: string) => requests.get(`/users/${type}`),
};

const Jobs = {
  all: (page: number, limit: number) =>
    requests.get(`/jobs?${qs.stringify({ limit, page })}`),
  byUser: (userId: string, page: number, limit: number) =>
    requests.get(`/jobs?userId=${encode(userId)}&${qs.stringify({ limit, page })}`),
  del: (jobId: string) =>
    requests.del(`/jobs/delete/${jobId}`),
  get: (jobId: string) =>
    requests.get(`/jobs/select/${jobId}`),
  update: (jobId: string, job: Partial<Job>) => 
    requests.put(`/jobs/update/${jobId}`, job),
  create: (job: Partial<Job>) => 
    requests.post('/jobs/create', job),
  search: (params: { query?: string; location?: string; categoryId?: string; employmentType?: string[]; page?: number; limit?: number }) =>
    requests.get(`/jobs/search?${qs.stringify(params)}`)
};

const Category = {
  getAll: () => requests.get(`/jobCategories`),
};

const agent = {
  Auth,
  Users,
  Jobs,
  Category
}

export default agent;
