class Field {
  constructor() {
    this.init();
  }

  init() {
    this.element = document.createElement('div');
    this.element.className = 'container-main';
    document.body.append(this.element);
  }
}

export default Field;