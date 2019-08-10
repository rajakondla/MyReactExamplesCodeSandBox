class SingleTon {
  static _instance = null;

  constructor() {
    if (SingleTon._instance) {
      SingleTon._instance = new SingleTon();
    }
  }

  get getInstance() {
    return SingleTon._instance;
  }
}

export default new SingleTon();
