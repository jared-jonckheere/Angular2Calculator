import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { StarComponent } from './components/star/star.component'


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        ProductListComponent,
        StarComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: AppComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
