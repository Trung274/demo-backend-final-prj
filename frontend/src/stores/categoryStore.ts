import { observable, action, makeObservable } from 'mobx';
import agent from '../agent';


export class CategoryStore {
  categories: string[] = [];
  isLoadingCate = false;

  constructor() {
    makeObservable(this, {
      categories: observable,
      loadCategories: action,
      isLoadingCate: observable,
    });
  }

  loadCategories() {
    this.isLoadingCate = true;
    return agent.Category.getAll()
      .then(action((cat: string[]) => { 
        this.categories = cat
    }))
      .finally(action(() => { this.isLoadingCate = false; }))
  }

}

export default new CategoryStore();