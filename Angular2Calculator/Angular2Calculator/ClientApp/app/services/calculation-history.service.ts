import { Injectable } from '@angular/core';
import {ICalculation} from '../components/calculator/calculation.ts'
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CalculationHistoryService {
    private calculationsSource = new Subject<ICalculation>();
    private calculationCursor: number = 0;
    private unsavedExpression: string = null; //when cycling through the history, save the uncompleted initial expression

    private historyMaterialized: ICalculation[] = [];

    calculation$ = this.calculationsSource.asObservable();

    addCalculation(calculation: ICalculation) {
        this.historyMaterialized.push(calculation);
        this.calculationCursor = this.historyMaterialized.length;
        this.unsavedExpression = null;
        this.calculationsSource.next(calculation);
    }

    backHistory(currentExpression: string): string {
        return this.scrollHistory(currentExpression, true);        
    }

    forwardHistory(currentExpression: string): string {
        return this.scrollHistory(currentExpression, false);
    }

    private scrollHistory(currentExpression: string, backwards: boolean = true): string {

        if (this.historyMaterialized.length === 0) {
            return currentExpression;
        }

        //The first expression since an addCalculation will be the unsaved expression
        if (this.unsavedExpression === null) {
            this.unsavedExpression = currentExpression;
        }
                
        if (backwards) {
            this.calculationCursor--;
        } else {
            this.calculationCursor++
        }

        //historyMaterialized is a circular queue. unsavedExpression is what was entered before invoking the history functionality.
        //unsavedExpression is considered to be at the ends of the circular queue (both -1 and length).
        var histExpr: string;
        if (this.calculationCursor === -1 || this.calculationCursor === this.historyMaterialized.length) { //At the unsaved expression
            this.calculationCursor = this.historyMaterialized.length; //history materialized.length is the imaginary index of the unsaved expression
            histExpr = this.unsavedExpression;
        }
        else if (this.calculationCursor > this.historyMaterialized.length) { //went past the unsaved expression, go the lower end of queue
            this.calculationCursor = 0;
            histExpr = this.historyMaterialized[this.calculationCursor].expression;
        }
        else {
            histExpr = this.historyMaterialized[this.calculationCursor].expression;
        }

        return histExpr;
    }

}
