import superagentPromise from 'superagent-promise';
import _superagent, { ResponseError, Request, Response } from 'superagent';
import commonStore from './stores/commonStore';
import authStore from './stores/authStore';
import qs from 'query-string';

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
  register: (username: string, email: string, password: string) => requests.post('/users', { user: { username, email, password } }),
  save: (user: any) => requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count: any, p: any) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = (article: any) => Object.assign({}, article, { slug: undefined })

const Articles = {
  all: (page: any, lim = 10, predicate: string) => requests.get(`/articles?${limit(lim, page)}`),
  byAuthor: (author: string, page: number, query: any) => requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag: string, page: number, lim = 10) => requests.get(`/articles?tag=${encode(tag)}&${limit(lim, page)}`),
  del: (slug: string) => requests.del(`/articles/${slug}`),
  favorite: (slug: string) => requests.post(`/articles/${slug}/favorite`, {}),
  favoritedBy: (author: string, page: number, _limit: number) => requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: (page: number, limit: number) => requests.get(`/articles/feed?limit=${limit}&offset=${page}`),
  get: (slug: string) => requests.get(`/articles/${slug}`),
  unfavorite: (slug: string) => requests.del(`/articles/${slug}/favorite`),
  update: (article: any) => requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: (article: any) => requests.post('/articles', { article })
};

const Comments = {
  create: (slug: string, comment: any) => requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug: string, commentId: number) => requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: (slug: string) => requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: (username: string) => requests.post(`/profiles/${username}/follow`, {}),
  get: (username: string) => requests.get(`/profiles/${username}`),
  unfollow: (username: string) => requests.del(`/profiles/${username}/follow`)
};

const Jobs = {
  all: (page: number, limit: number) => 
    requests.get(`/jobs?${qs.stringify({ limit, page })}`),
  byUser: (userId: string, page: number, limit: number) => 
    requests.get(`/jobs?userId=${encode(userId)}&${qs.stringify({ limit, page })}`),
  del: (jobId: string) => 
    requests.del(`/jobs/${jobId}`),
  get: (jobId: string) => 
    requests.get(`/jobs/${jobId}`),
  update: (jobId: string, job: any) => 
    requests.put(`/jobs/${jobId}`, { job }),
  create: (job: any) => 
    requests.post('/jobs', { job }),
  search: (params: { query?: string; location?: string; categoryId?: string; employmentType?: string[]; page?: number; limit?: number }) => 
    requests.get(`/jobs/search?${qs.stringify(params)}`)
};

const agent = {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  Jobs,
}

export default agent;
