import field from './index.js'

class ProcessingUnit{
    constructor(display){
        this.init(display)
    }

    init(displayView){
        this.value1 = '';
        this.value2 = '';
        this.operator = '';
        this.end = false;
        field.element.addEventListener('click', (el) => this.process(el, displayView));
    }

    process(el, displayView){
        if (
          el.target.className !== 'display' &&
          el.target.className !== 'valueView' &&
          el.target.className !== 'operatorView'
        ) {
          if (el.target.className == 'clearDisplay')
          {
            displayView.valueView.innerHTML = '0';
            displayView.showOperator('');
            this.value1 = '';
            this.value2 = '';
            this.operator = '';
            this.end = false;
          }
          if (el.target.className == 'deleteValue')
          {
            displayView.valueView.innerHTML =  displayView.valueView.innerHTML.slice(0, -1);
          }
          if (
            el.target.className !== 'clearDisplay' &&
            el.target.className !== 'deleteValue' &&
            el.target.className !== 'equals' &&
            el.target.className !== 'operator' &&
            el.target.className !== 'containerMain'
          ) { if (this.value2 == '' && this.operator == '' )
            {
            this.value1 += el.target.innerHTML;
            displayView.showValue(this.value1);
            } else if (this.value1 !== '' && this.value2 !== '' && this.end){
                this.value2 = el.target.innerHTML;
                this.end = false;
                displayView.showValue(this.value2);
            } else {
                this.value2 += el.target.innerHTML;
                displayView.showValue(this.value2);
            }
            console.log(this.value1,this.operator,this.value2);
          }
          if (el.target.className == 'operator') {
            displayView.showOperator(el.target.value);
            this.operator = el.target.innerHTML;
            this.value1 = displayView.valueView.innerHTML;
            console.log(this.value1 , this.operator);  
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
                        displayView.valueView.textContent = 'Ошибка';
                        this.value1 = '';
                        this.value2 = '';
                        this.operator = '';
                        displayView.showOperator('');
                        return;
                    };
                    this.value1 = this.value1 / this.value2;
            }
            this.end = true;
            displayView.showValue(this.value1);
            displayView.showOperator('');
            console.log(this.value1, this.operator, this.value2);

          }
        }

    }   
}

export default ProcessingUnit;