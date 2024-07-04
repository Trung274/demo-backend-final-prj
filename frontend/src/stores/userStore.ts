import { observable, action, makeObservable } from 'mobx';
import agent from '../agent';

export type LoginResponse = {
  _id: number;
  email: string;
  token: string;
}

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  roleId: string;
  profile: {
    name: string;
  },
}

export class UserStore {
  currentUser?: User;
  loadingUser?: boolean;
  updatingUser?: boolean;
  updatingUserErrors: any;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      loadingUser: observable,
      updatingUser: observable,
      updatingUserErrors: observable,
      pullUser: action,
      updateUser: action,
      forgetUser: action
    });
  }

  pullUser() {
    this.loadingUser = true;
    return agent.Auth.current()
      .then(action(( user: User) => { this.currentUser = user; }))
      .finally(action(() => { this.loadingUser = false; }))
  }

  updateUser(newUser: User) {
    this.updatingUser = true;
    return agent.Auth.save(newUser)
      .then(action(({ user }: { user: User }) => { this.currentUser = user; }))
      .finally(action(() => { this.updatingUser = false; }))
  }

  forgetUser() {
    this.currentUser = undefined;
  }
}

export default new UserStore();
