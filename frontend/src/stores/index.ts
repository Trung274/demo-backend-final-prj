import articleStore, { ArticleStore } from './articleStore';
import commentStore, { CommentStore } from './commentStore';
import editorStore, { EditorStore } from './editorStore';
import commonStore, { CommonStore } from './commonStore';
import authStore, { AuthStore } from './authStore';
import userStore, { UserStore } from './userStore';
import profileStore, { ProfileStore } from './profileStore';
import jobStore, { JobStore } from './jobStore';

export type RootStore = {
  articleStore: ArticleStore;
  commentStore: CommentStore;
  editorStore: EditorStore;
  authStore: AuthStore;
  commonStore: CommonStore;
  profileStore: ProfileStore;
  userStore: UserStore;
  jobStore: JobStore;
}

const rootStore: RootStore = {
  articleStore,
  commentStore,
  editorStore,
  authStore,
  commonStore,
  profileStore,
  userStore,
  jobStore  
};

export default rootStore;