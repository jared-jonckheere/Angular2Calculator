import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: require('./app.component.html')
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}
