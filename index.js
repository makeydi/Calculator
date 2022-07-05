import Field from './Field.js';
import Display from './Display.js';
import Button from './Button.js';
import Processing from './Processing.js';
import dataBtn from './dataBtn.js';

const field = new Field(); 
export default field;
let displayView = new Display();
for (let i = 0; i < dataBtn.length; i++) {
    let button = new Button();
    button.btn.innerHTML = dataBtn[i].label;
    button.btn.className = dataBtn[i].className;
    button.btn.value = dataBtn[i].value;
    field.element.appendChild(button.btn);
}
let process = new Processing(displayView);

