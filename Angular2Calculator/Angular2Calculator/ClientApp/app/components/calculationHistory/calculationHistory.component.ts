import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ICalculation} from '../calculator/calculation.ts'

@Component({
    selector: 'calculationHistory',
    template: require('./calculationHistory.component.html')
})
export class CalculationHistoryComponent {
    calculations: ICalculation[] = [];

    constructor() {

    }

    @Input() AddCalculation(expression: string, result: string) {
        this.calculations = this.calculations.concat({ expression, result});
    }

    clickCalculation(calculation: ICalculation) {
        this.calculationClicked.emit(calculation);
    }

    @Output() calculationClicked: EventEmitter<ICalculation> = new EventEmitter<ICalculation>();

}
