import field from "./index.js"
import dataBtn from "./dataBtn.js"

class ButtonsRendering {
    constructor(){
        this.init()
    }

    init(){
        for (let i = 0; i < dataBtn.length; i++) {
            this.btn = document.createElement("button"); 
            this.btn.innerHTML = dataBtn[i].label;
            this.btn.className = dataBtn[i].className;
            this.btnValue = dataBtn[i].value;
            field.element.appendChild(this.btn);
        }
    }
}

export default ButtonsRendering;