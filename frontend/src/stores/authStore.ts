import { observable, action, makeObservable } from 'mobx';
import { ResponseError } from 'superagent';
import agent from '../agent';
import userStore, { User, LoginResponse } from './userStore';
import commonStore from './commonStore';

export class AuthStore {
  inProgress = false;
  errors = undefined;

  constructor() {
    makeObservable(this, {
      inProgress: observable,
      errors: observable,
      login: action,
      register: action,
      logout: action
    });
  }


  login(email: string, password: string) {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.login(email, password)
      .then((user: LoginResponse) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .catch(action((err: ResponseError) => {
        debugger
        this.errors = err.response && err.response.body && err.response.body;
        // throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  register(firstName: string, lastName: string, email: string, password: string, roleId: string) {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.register(firstName, lastName, email, password, roleId)
      .then((user: LoginResponse) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .catch(action((err: ResponseError) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  logout() {
    commonStore.setToken(null);
    userStore.forgetUser();
    return Promise.resolve();
  }
}

export default new AuthStore();
