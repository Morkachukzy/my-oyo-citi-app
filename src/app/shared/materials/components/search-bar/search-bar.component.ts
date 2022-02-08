import {Component, Output, EventEmitter, OnInit, Input, OnChanges} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {SimpleChanges} from '@angular/core';

const a = (currentTheme, previousTheme) => {

    const matFormField: HTMLElement = document.querySelector('.mat-form-field-flex');
    if (previousTheme !== '') {
        matFormField.classList.remove(previousTheme);
    }
    matFormField.classList.add(currentTheme);
    console.log(matFormField);
};


@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SearchBarComponent implements OnInit, OnChanges {
    @Output() searchEvent = new EventEmitter<string>();
    @Input() darkMode = `light`;
    searchValue = ``;

    constructor() {
    }

    ngOnInit() {
        // console.log(this.darkMode);
        a(this.darkMode, '');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        for (const prop in changes) {
            if (changes.hasOwnProperty(prop)) {
                console.log(changes.darkMode.currentValue);
                this.darkMode = changes.darkMode.currentValue;
                a(changes.darkMode.currentValue, changes.darkMode.previousValue);
            }
        }

        // changes.prop contains the old and the new value...
    }

    searchFor(searchValue: string) {
        this.searchEvent.emit(searchValue);
    };

    clearSearchValue() {
        this.searchValue = ``;
    }

}