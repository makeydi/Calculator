class FieldRendering {
  constructor() {
    this.init();
  }

  init() {
    this.element = document.createElement("div");
    this.element.className = "containerMain";
    document.body.append(this.element);
  }
}

export default FieldRendering;