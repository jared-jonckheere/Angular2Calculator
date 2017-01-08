import { Component } from '@angular/core';
import { CalculationEngineService } from '../../services/calculation-engine.service.ts';

@Component({
    selector: 'calculator',
    template: require('./calculator.component.html'),
    providers: [CalculationEngineService]
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
        exprTemp = exprTemp.substr(0, exprTemp.length - 1);
        this.expression = exprTemp;
    }

    Evaluate(): void {
        this.expression = this._calculationEngineService.evaluate(this.expression);
    }

    Validate(): boolean {
        return this._calculationEngineService.validate(this.expression);
    }

}
