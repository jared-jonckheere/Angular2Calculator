import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ICalculation} from '../calculator/calculation';
import { CalculationHistoryService } from '../../services/calculation-history.service.ts';

@Component({
    selector: 'calculation-history',
    template: require('./calculationHistory.component.html')

})
export class CalculationHistoryComponent {

    calculations: ICalculation[] = [];

    constructor(private calculationHistoryService: CalculationHistoryService) {
        calculationHistoryService.calculation$.subscribe(calculation => {
            this.calculations.push(calculation);
        });
    }


    clickCalculation(calculation: ICalculation) {
        this.calculationClicked.emit(calculation);
    }

    @Output() calculationClicked: EventEmitter<ICalculation> = new EventEmitter<ICalculation>();

}
