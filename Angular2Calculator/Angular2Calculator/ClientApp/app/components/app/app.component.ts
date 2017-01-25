import { Component } from '@angular/core';
import { CalculationHistoryService } from '../../services/calculation-history.service.ts';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    providers: [CalculationHistoryService]
})
export class AppComponent {
}
