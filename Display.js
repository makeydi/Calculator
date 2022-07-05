import field from './index.js';

class Display {
    constructor(){
        this.valueView = 0;
        this.init();
    }

    init(){
        this.display = document.createElement('div')
        this.display.className = 'display';
        this.operatorView = document.createElement('div')
        this.operatorView.className = 'operator-view';
        this.valueView = document.createElement('div')
        this.valueView.className = 'value-view';
        this.display.append(this.operatorView, this.valueView);
        field.element.append(this.display); 
        this.valueView.innerHTML = '0'; 
    }

    showValue(data) {
        if (data.length > 11) {
            this.valueView.classList.add('long-number');
            this.valueView.innerHTML = data;}
            else {
                this.valueView.classList.remove('long-number');
                this.valueView.innerHTML = data;
            }; 
    }

    showOperator(data) {
        this.operatorView.innerHTML = data;
    }
}

export default Display;