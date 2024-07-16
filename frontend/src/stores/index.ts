import commonStore, { CommonStore } from './commonStore';
import authStore, { AuthStore } from './authStore';
import userStore, { UserStore } from './userStore';
import jobStore, { JobStore } from './jobStore';
import categoryStore, { CategoryStore } from './categoryStore';

export type RootStore = {
  authStore: AuthStore;
  commonStore: CommonStore;
  userStore: UserStore;
  jobStore: JobStore;
  categoryStore: CategoryStore;
}

const rootStore: RootStore = {
  authStore,
  commonStore,
  userStore,
  jobStore,
  categoryStore,
};

export default rootStore;