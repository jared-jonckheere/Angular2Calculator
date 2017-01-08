import { Component } from '@angular/core';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html')
})
export class CalculatorComponent {
    expression: string = '';
    validExprRe: RegExp = new RegExp('^[+-/*.0-9]*$');

    KeyPress(c: string): void {
        this.expression += c;
    }

    Clear(): void {
        this.expression = '';
    }

    Backspace(): void {
        var exprTemp: string = this.expression;
        exprTemp = exprTemp.substr(0, exprTemp.length - 1);
        this.expression = exprTemp;
    }

    Evaluate(): void {
        //eval isn't dangerous as long as only +-/*.0-9 are allowed
        if (this.validExprRe.test(this.expression)) {
            this.expression = eval(this.expression);
        }
        else {
            this.expression = "invalid expression";
        }
    }

}
