import {observable, action} from 'mobx'

class AppStore {
  @observable loading = true;
  @observable counter = 0;
  @observable merida =  [
    {key: 1, id: 'Hello World', coordinate: [-89.619, 20.975], name: 'Nueva casa', price: 1730},
    {key: 2, id: 'Installation', coordinate: [-89.619, 20.977], name: 'casa 2 ', price: 1500},
    {key: 3, id: 'Installation', coordinate: [-89.620, 20.969], name: 'casa 3', price: 4500},
    {key: 4, id: 'Installation', coordinate: [-89.617, 20.979], name: 'Campestre 371 x 30 ', price: 2500},
    {key: 5, id: 'Installation', coordinate: [-89.610, 20.965], name: 'casa 4', price: 7000},
  ];

  @action loadingCompleted() {
    this.loading = false;
  }

  @action toggleLoading() {
    this.loading = this.loading ? false : true;
  }
}

export default new AppStore();
