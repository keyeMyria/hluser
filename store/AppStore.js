import {observable, action} from 'mobx'

class AppStore {
  @observable loading = false;
  @observable logged = false;
  @observable user = null;
  @observable usermail = null;
  @observable username = null;
  @observable merida =  [
    {key: 1, id: 'Hello World', long: -89.619 , lat: 20.975, name: 'Nueva casa', price: 1730},
    {key: 2, id: 'Hello World', long: -89.632 , lat: 20.989, name: 'Nueva casa', price: 1930},
  ];

  @action loggedtrue(){
    this.logged = true;
  }

  @action changedUser(){
    this.user = changedUser;
  }

  @action memberUser(){
    this.user = loggedUser;
  }

  @action loadingCompleted() {
    this.loading = false;
  }

  @action toggleLoading() {
    this.loading = this.loading ? false : true;
  }
}

export default new AppStore();
