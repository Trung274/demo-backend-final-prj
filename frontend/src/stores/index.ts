import commonStore, { CommonStore } from './commonStore';
import authStore, { AuthStore } from './authStore';
import userStore, { UserStore } from './userStore';
import jobStore, { JobStore } from './jobStore';

export type RootStore = {
  authStore: AuthStore;
  commonStore: CommonStore;
  userStore: UserStore;
  jobStore: JobStore;
}

const rootStore: RootStore = {
  authStore,
  commonStore,
  userStore,
  jobStore  
};

export default rootStore;