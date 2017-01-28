import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: '**', redirectTo: 'app' }
        ])
    ]
})
export class AppModule {
}
