import { Component, Input } from '@angular/core';
import { CalculationEngineService } from '../../services/calculation-engine.service';
import { CalculationHistoryService } from '../../services/calculation-history.service';

@Component({
    selector: 'calculator',
    templateUrl: 'app/components/calculator/calculator.component.html',
    providers: [CalculationEngineService],
    styleUrls: ['app/components/calculator/calculator.component.css']
})
export class CalculatorComponent {
    expression: string = '';

    constructor(private _calculationEngineService: CalculationEngineService, private _calculationHistoryService : CalculationHistoryService) {

    }

    @Input()
    setExpression(expression: string) {
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
            var oldExpr: string = this.expression;
            var result: string = this._calculationEngineService.evaluate(this.expression).toString();
            this._calculationHistoryService.addCalculation({
                expression: oldExpr, result: result
            });
            this.expression = result;
        }
    }

    Validate(): boolean {
        return this._calculationEngineService.validate(this.expression);
    }

    backHistory() {
        var prevExpr: string = this._calculationHistoryService.backHistory(this.expression);
        if (prevExpr !== null) {
            this.expression = prevExpr;
        }
    }

    forwardHistory() {
        var nextExpr: string = this._calculationHistoryService.forwardHistory(this.expression);
        if (nextExpr !== null) {
            this.expression = nextExpr;
        }
    }

}
