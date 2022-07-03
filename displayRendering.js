import field from "./index.js";

class DisplayRendering {
    constructor(){
        this.value = 0;
        this.operator = '';
        this.init();
    }

    init(){
        this.display = document.createElement('div')
        this.display.className = 'display';
        this.operatorView = document.createElement('div')
        this.operatorView.className = 'operatorView';
        this.valueView = document.createElement('div')
        this.valueView.className = 'valueView';
        this.display.append(this.operatorView, this.valueView);
        field.element.append(this.display); 
        this.valueView.innerHTML = '0'; 
    }

    showValue(data) {
        this.element.innerHTML = data;
    }
}

export default DisplayRendering;