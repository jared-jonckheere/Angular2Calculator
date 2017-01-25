import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { CalculationHistoryComponent } from './components/calculationHistory/calculationHistory.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        CalculatorComponent,
        CalculationHistoryComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: '**', redirectTo: 'app' }
        ])
    ]
})
export class AppModule {
}
