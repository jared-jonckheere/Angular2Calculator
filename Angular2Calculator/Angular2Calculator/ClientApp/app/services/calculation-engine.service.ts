import { Injectable } from '@angular/core';

@Injectable()
export class CalculationEngineService {
    validExprRe: RegExp = new RegExp('^-?[0-9]*\.?[0-9]+([+*/\-]-?[0-9]*.?[0-9]+)*$');

    evaluate(expression: string): string {
        var result: string = '';
        
        if (this.validate(expression)) {
            try {
                //eval isn't dangerous as long as only +-/*.0-9 are allowed
                expression = expression.replace('--', '- -'); //eval thinks -- is decrement, not minus negative
                result = eval(expression);
            }
            catch (err) {
                alert(err);
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
        return this.validExprRe.test(expression) || expression === '';
    }
}
