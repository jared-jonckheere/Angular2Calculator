import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'ai-star',
    template: require('./star.component.html'),
    styles: [require('./star.component.css')]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}