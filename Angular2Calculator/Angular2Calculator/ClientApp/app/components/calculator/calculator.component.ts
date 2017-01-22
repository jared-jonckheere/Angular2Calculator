import { Component } from '@angular/core';
import { CalculationEngineService } from '../../services/calculation-engine.service.ts';

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
            this.expression = this._calculationEngineService.evaluate(this.expression).toString();
        }
    }

    Validate(): boolean {
        return this._calculationEngineService.validate(this.expression);
    }

}
