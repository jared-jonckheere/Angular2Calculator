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
var calculation_history_service_1 = require('../../services/calculation-history.service');
var CalculationHistoryComponent = (function () {
    function CalculationHistoryComponent(calculationHistoryService) {
        var _this = this;
        this.calculationHistoryService = calculationHistoryService;
        this.calculations = [];
        this.calculationClicked = new core_1.EventEmitter();
        calculationHistoryService.calculation$.subscribe(function (calculation) {
            _this.calculations.push(calculation);
        });
    }
    CalculationHistoryComponent.prototype.clickCalculation = function (calculation) {
        this.calculationClicked.emit(calculation);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CalculationHistoryComponent.prototype, "calculationClicked", void 0);
    CalculationHistoryComponent = __decorate([
        core_1.Component({
            selector: 'calculation-history',
            templateUrl: 'app/components/CalculationHistory/calculationHistory.component.html'
        }), 
        __metadata('design:paramtypes', [calculation_history_service_1.CalculationHistoryService])
    ], CalculationHistoryComponent);
    return CalculationHistoryComponent;
}());
exports.CalculationHistoryComponent = CalculationHistoryComponent;
//# sourceMappingURL=calculationHistory.component.js.map