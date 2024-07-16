import commonStore, { CommonStore } from './commonStore';
import authStore, { AuthStore } from './authStore';
import userStore, { UserStore } from './userStore';
import profileStore, { ProfileStore } from './profileStore';
import jobStore, { JobStore } from './jobStore';
import categoryStore, { CategoryStore } from './categoryStore';

export type RootStore = {
  authStore: AuthStore;
  commonStore: CommonStore;
  profileStore: ProfileStore;
  userStore: UserStore;
  jobStore: JobStore;
  categoryStore: CategoryStore;
}

const rootStore: RootStore = {
  authStore,
  commonStore,
  profileStore,
  userStore,
  jobStore,
  categoryStore,
};

export default rootStore;