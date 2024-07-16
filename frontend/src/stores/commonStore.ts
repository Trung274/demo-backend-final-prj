import { observable, action, reaction, makeObservable } from 'mobx';
import agent from '../agent';

export class CommonStore {

  appName = 'JobHub';
  token = window.localStorage.getItem('jwt');
  appLoaded = false;

  tags: string[] = [];
  isLoadingTags = false;

  constructor() {
    makeObservable(this, {
      appName: observable,
      token: observable,
      appLoaded: observable,
      tags: observable,
      isLoadingTags: observable,
      setToken: action,
      setAppLoaded: action
    });

    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  setToken(token: string | null) {
    this.token = token;
  }

  setAppLoaded() {
    this.appLoaded = true;
  }

}

export default new CommonStore();