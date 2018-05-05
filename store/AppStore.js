import {observable, action} from 'mobx'

class AppStore {
  @observable loading = true;
  @observable counter = 0;

  @action loadingCompleted() {
    this.loading = false;
  }

  @action toggleLoading() {
    this.loading = this.loading ? false : true;
  }
}

export default new AppStore();
