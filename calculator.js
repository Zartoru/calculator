class Calculator {

    createNewDiv(class1, class2, parent) {
        const div = this.createElement('div');
        div.classList.add(class1, class2);
        parent.append(div);
    }

    createNewButton(text, class1, class2, parent) {
        const button = this.createElement('button');
        button.textContent = text;
        button.classList.add(class1, class2);
        parent.append(button);
    }
    
    constructor() {
        const body = document.body;

        createNewDiv('calc', '', body);
        createNewDiv ('screen', '', document.querySelector('.calc'));
        createNewDiv ('keyboard', '', document.querySelector('.calc'));
        createNewDiv ('operator', '', document.querySelector('.keyboard'));
        createNewDiv ('nb-equal', '', document.querySelector('.keyboard'));
        createNewDiv ('nb', '', document.querySelector('.nb-equal'));
        createNewDiv ('equal', '', document.querySelector('.nb-equal'));
        createNewDiv ('btn', 'line1', document.querySelector('.nb'));
        createNewDiv ('btn', 'line2', document.querySelector('.nb'));
        createNewDiv ('btn', 'line3', document.querySelector('.nb'));
        createNewDiv ('btn', 'line4', document.querySelector('.nb'));
    
        createNewButton('+', 'btn', '', document.querySelector('.operator'));
        createNewButton('-', 'btn', '', document.querySelector('.operator'));
        createNewButton('*', 'btn', '', document.querySelector('.operator'));
        createNewButton('/', 'btn', '', document.querySelector('.operator'));
    
        createNewButton('7', 'btn', '', document.querySelector('.line1'));
        createNewButton('8', 'btn', '', document.querySelector('.line1'));
        createNewButton('9', 'btn', '', document.querySelector('.line1'));
    
        createNewButton('4', 'btn', '', document.querySelector('.line2'));
        createNewButton('5', 'btn', '', document.querySelector('.line2'));
        createNewButton('6', 'btn', '', document.querySelector('.line2'));
    
        createNewButton('1', 'btn', '', document.querySelector('.line3'));
        createNewButton('2', 'btn', '', document.querySelector('.line3'));
        createNewButton('3', 'btn', '', document.querySelector('.line3'));
    
        createNewButton('0', 'btn', '', document.querySelector('.line4'));
        createNewButton('.', 'btn', '', document.querySelector('.line4'));
        createNewButton('AC', 'btn', 'ac', document.querySelector('.line4'));
    
        createNewButton('=', 'btn', 'equal-btn', document.querySelector('.equal'));
    
        body.append(document.querySelector('.calc'))
    
    
        calc = document.addEventListener(click)
    }


}