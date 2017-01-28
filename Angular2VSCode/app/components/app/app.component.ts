import { Component } from '@angular/core';
import { CalculationHistoryService } from '../../services/calculation-history.service';

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    providers: [CalculationHistoryService]
})
export class AppComponent {
}
