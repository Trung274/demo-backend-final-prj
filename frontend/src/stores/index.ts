import commonStore, { CommonStore } from './commonStore';
import authStore, { AuthStore } from './authStore';
import userStore, { UserStore } from './userStore';
import profileStore, { ProfileStore } from './profileStore';
import jobStore, { JobStore } from './jobStore';

export type RootStore = {
  authStore: AuthStore;
  commonStore: CommonStore;
  profileStore: ProfileStore;
  userStore: UserStore;
  jobStore: JobStore;
}

const rootStore: RootStore = {
  authStore,
  commonStore,
  profileStore,
  userStore,
  jobStore  
};

export default rootStore;