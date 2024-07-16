import { observable, action, makeObservable, runInAction } from 'mobx';
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
    name?: string;
    avatar?: string;
    description?: string;
    website?: string;
    slogan?: string;
    employees?: string;
    industry?: string;
    phone?: string;
    city?: string;
    address?: string;
    socialMedia?: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
    }
  },
}

export class UserStore {
  currentUser?: User;
  loadingUser?: boolean;
  updatingUser?: boolean;
  updatingUserErrors: any;

  listBusinesses: string[] = [];
  isLoadingBusinesses = false;

  constructor() {
    makeObservable(this, {
      currentUser: observable,
      loadingUser: observable,
      updatingUser: observable,
      updatingUserErrors: observable,
      pullUser: action,
      updateUser: action,
      forgetUser: action,
      updateProfile: action,
      listBusinesses: observable,
      loadListBusinesses: action,
      isLoadingBusinesses: observable,
    });
  }

  pullUser() {
    this.loadingUser = true;
    return agent.Auth.current()
      .then(action((user: User) => { this.currentUser = user; }))
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

  updateProfile = async (profileData: Partial<User>) => {
    this.updatingUser = true;
    try {
      const updatedUser = await agent.Auth.updateProfile(profileData);
      runInAction(() => {
        this.currentUser = updatedUser;
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    } finally {
      runInAction(() => {
        this.updatingUser = false;
      });
    }
  };

  loadListBusinesses() {
    this.isLoadingBusinesses = true;
    return agent.Category.getAll()  //note get bus
      .then(action((bu: string[]) => { 
        this.listBusinesses = bu
    }))
      .finally(action(() => { this.isLoadingBusinesses = false; }))
  }
}

export default new UserStore();