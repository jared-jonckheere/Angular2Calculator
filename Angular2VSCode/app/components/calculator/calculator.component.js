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
var calculation_engine_service_1 = require('../../services/calculation-engine.service');
var calculation_history_service_1 = require('../../services/calculation-history.service');
var CalculatorComponent = (function () {
    function CalculatorComponent(_calculationEngineService, _calculationHistoryService) {
        this._calculationEngineService = _calculationEngineService;
        this._calculationHistoryService = _calculationHistoryService;
        this.expression = '';
    }
    CalculatorComponent.prototype.setExpression = function (expression) {
        this.expression = expression;
    };
    CalculatorComponent.prototype.KeyPress = function (c) {
        this.expression += c.toString();
    };
    CalculatorComponent.prototype.Clear = function () {
        this.expression = '';
    };
    CalculatorComponent.prototype.Backspace = function () {
        var exprTemp = this.expression;
        if (exprTemp.length > 0) {
            exprTemp = exprTemp.substr(0, exprTemp.length - 1);
        }
        this.expression = exprTemp;
    };
    CalculatorComponent.prototype.Evaluate = function () {
        if (this.Validate()) {
            var oldExpr = this.expression;
            var result = this._calculationEngineService.evaluate(this.expression).toString();
            this._calculationHistoryService.addCalculation({
                expression: oldExpr, result: result
            });
            this.expression = result;
        }
    };
    CalculatorComponent.prototype.Validate = function () {
        return this._calculationEngineService.validate(this.expression);
    };
    CalculatorComponent.prototype.backHistory = function () {
        var prevExpr = this._calculationHistoryService.backHistory(this.expression);
        if (prevExpr !== null) {
            this.expression = prevExpr;
        }
    };
    CalculatorComponent.prototype.forwardHistory = function () {
        var nextExpr = this._calculationHistoryService.forwardHistory(this.expression);
        if (nextExpr !== null) {
            this.expression = nextExpr;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], CalculatorComponent.prototype, "setExpression", null);
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'calculator',
            templateUrl: 'app/components/calculator/calculator.component.html',
            providers: [calculation_engine_service_1.CalculationEngineService],
            styleUrls: ['app/components/calculator/calculator.component.css']
        }), 
        __metadata('design:paramtypes', [calculation_engine_service_1.CalculationEngineService, calculation_history_service_1.CalculationHistoryService])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map