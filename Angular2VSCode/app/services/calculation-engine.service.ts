import { Injectable } from '@angular/core';

@Injectable()
export class CalculationEngineService {
    numberPartialRegex: string = '-?(0|[1-9][0-9]{0,6})([.][0-9]{1,7})?';
    validExprRe: RegExp = new RegExp('^'+this.numberPartialRegex+'([+*/\-]' + this.numberPartialRegex + ')*$');

    evaluate(expression: string): string {
        var result: string = '';
        
        if (this.validate(expression)) {
            try {
                //eval isn't dangerous as long as only +-/*.0-9 are allowed
                expression = expression.replace('--', '- -'); //eval thinks -- is decrement, not minus negative
                result = eval(expression);
            }
            catch (err) {
                result = "invalid expression";
            }
        }
        else {
            result = "invalid expression";
        }

        return result;
    }

    validate(expression: string): boolean {
        expression = expression.replace(' ', ''); //remove spaces ahead of time to make the regex simpler
        return this.validExprRe.test(expression) ;
    }
}
