"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var CalculationHistoryService = (function () {
    function CalculationHistoryService() {
        this.calculationsSource = new Subject_1.Subject();
        this.calculationCursor = 0;
        this.unsavedExpression = null; //when cycling through the history, save the uncompleted initial expression
        this.historyMaterialized = [];
        this.calculation$ = this.calculationsSource.asObservable();
    }
    CalculationHistoryService.prototype.addCalculation = function (calculation) {
        this.historyMaterialized.push(calculation);
        this.calculationCursor = this.historyMaterialized.length;
        this.unsavedExpression = null;
        this.calculationsSource.next(calculation);
    };
    CalculationHistoryService.prototype.backHistory = function (currentExpression) {
        return this.scrollHistory(currentExpression, true);
    };
    CalculationHistoryService.prototype.forwardHistory = function (currentExpression) {
        return this.scrollHistory(currentExpression, false);
    };
    CalculationHistoryService.prototype.scrollHistory = function (currentExpression, backwards) {
        if (backwards === void 0) { backwards = true; }
        if (this.historyMaterialized.length === 0) {
            return currentExpression;
        }
        //The first expression since an addCalculation will be the unsaved expression
        if (this.unsavedExpression === null) {
            this.unsavedExpression = currentExpression;
        }
        if (backwards) {
            this.calculationCursor--;
        }
        else {
            this.calculationCursor++;
        }
        //historyMaterialized is a circular queue. unsavedExpression is what was entered before invoking the history functionality.
        //unsavedExpression is considered to be at the ends of the circular queue (both -1 and length).
        var histExpr;
        if (this.calculationCursor === -1 || this.calculationCursor === this.historyMaterialized.length) {
            this.calculationCursor = this.historyMaterialized.length; //history materialized.length is the imaginary index of the unsaved expression
            histExpr = this.unsavedExpression;
        }
        else if (this.calculationCursor > this.historyMaterialized.length) {
            this.calculationCursor = 0;
            histExpr = this.historyMaterialized[this.calculationCursor].expression;
        }
        else {
            histExpr = this.historyMaterialized[this.calculationCursor].expression;
        }
        return histExpr;
    };
    CalculationHistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CalculationHistoryService);
    return CalculationHistoryService;
}());
exports.CalculationHistoryService = CalculationHistoryService;
//# sourceMappingURL=calculation-history.service.js.map