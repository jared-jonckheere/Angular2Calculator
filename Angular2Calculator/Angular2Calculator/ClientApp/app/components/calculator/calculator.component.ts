import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalculationEngineService } from '../../services/calculation-engine.service.ts';
import {ICalculation} from './calculation.ts'

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
    providers: [CalculationEngineService],
    styles: [require('./calculator.component.css')]
})
export class CalculatorComponent {
    expression: string = '';

    constructor(private _calculationEngineService: CalculationEngineService) {

    }

    @Output() setExpression(expression: string) {
        this.expression = expression;
    }

    KeyPress(c: string): void {
        this.expression += c.toString();
    }

    Clear(): void {
        this.expression = '';
    }

    Backspace(): void {
        var exprTemp: string = this.expression;
        if (exprTemp.length > 0) {
            exprTemp = exprTemp.substr(0, exprTemp.length - 1);
        }
        this.expression = exprTemp;
    }

    Evaluate(): void {
        if (this.Validate()) {
            var oldExpr = this.expression;
            var result: string = this._calculationEngineService.evaluate(this.expression).toString();
            this.expression = result;
            this.evaluated.emit( { expression: oldExpr, result: result });
        }
    }

    Validate(): boolean {
        return this._calculationEngineService.validate(this.expression);
    }

    @Output() evaluated: EventEmitter<ICalculation> = new EventEmitter<ICalculation>();

}
