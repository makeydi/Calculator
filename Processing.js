import field from './index.js'

class ProcessingUnit{
    constructor(display){
        this.display = display;
        this.init()
    }

    init(){
        this.value1 = '';
        this.value2 = '';
        this.operator = '';
        this.end = false;
        field.element.addEventListener('click', (el) => this.process(el));
    }

    process(el){
        if (
          el.target.className !== 'display' &&
          el.target.className !== 'value-view' &&
          el.target.className !== 'operator-view'
        ) {
          if (el.target.className == 'clear-display')
          {
            this.display.valueView.innerHTML = '0';
            this.display.showOperator('');
            this.value1 = '';
            this.value2 = '';
            this.operator = '';
            this.end = false;
          }
          if (el.target.className == 'delete-value')
          {
            this.display.valueView.innerHTML =  this.display.valueView.innerHTML.slice(0, -1);
          }
          if (
            el.target.className !== 'clear-display' &&
            el.target.className !== 'delete-value' &&
            el.target.className !== 'equals' &&
            el.target.className !== 'operator' &&
            el.target.className !== 'container-main'
          ) { if (this.value2 == '' && this.operator == '' )
            {
            this.value1 += el.target.innerHTML;
            this.display.showValue(this.value1);
            } else if (this.value1 !== '' && this.value2 !== '' && this.end){
                this.value2 = el.target.innerHTML;
                this.end = false;
                this.display.showValue(this.value2);
            } else {
                this.value2 += el.target.innerHTML;
                this.display.showValue(this.value2);
            }
          }
          if (el.target.className == 'operator') {
            this.display.showOperator(el.target.value);
            this.operator = el.target.innerHTML;
            this.value1 = this.display.valueView.innerHTML;
          }
          if (el.target.className == 'equals') { if (this.value2 == '') this.value2 = this.value1;
            switch (this.operator) {
                case '+': 
                    this.value1 = (+this.value1) + (+this.value2);
                break;
                case '-':
                    this.value1 = this.value1 - this.value2;
                break;
                case '*':
                    this.value1 = this.value1 * this.value2;
                break;
                case '/': 
                    if (this.value2 === '0') {
                        this.display.valueView.textContent = "Ошибка";
                        this.value1 = '';
                        this.value2 = '';
                        this.operator = '';
                        this.display.showOperator("");
                        return;
                    };
                    this.value1 = this.value1 / this.value2;
            }
            this.end = true;
            this.display.showValue(this.value1);
            this.display.showOperator("");
          }
        }
    }   
}

export default ProcessingUnit;