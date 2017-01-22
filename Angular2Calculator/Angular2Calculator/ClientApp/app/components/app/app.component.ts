import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {ICalculation} from '../calculator/calculation.ts'
import { CalculationHistoryComponent } from '../calculationHistory/calculationHistory.component';
import { CalculatorComponent} from '../calculator/calculator.component';


@Component({
    selector: 'app',
    template: require('./app.component.html')
})
export class AppComponent {
    @ViewChild(CalculationHistoryComponent)
    private calculationHistory: CalculationHistoryComponent;

    @ViewChild(CalculatorComponent)
    private calculator: CalculatorComponent;

    onEvaluate(calculation : ICalculation) {
        this.calculationHistory.AddCalculation(calculation.expression, calculation.result);
    } 

    onCalculationClicked(calculation : ICalculation) {
        this.calculator.setExpression(calculation.expression);
    }

}
