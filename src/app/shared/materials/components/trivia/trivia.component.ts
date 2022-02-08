import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-trivia',
    templateUrl: './trivia.component.html',
    styleUrls: ['./trivia.component.scss'],
})
export class TriviaComponent implements OnInit {
    @Input() trivia: any = {
        question: '',
        noOfParticipants: 0,
    };
    constructor(private route: Router) {
    }
    get question() {
        return this.trivia?.question;
    }
    get numberOfParticipants() {
        return this.trivia?.noOfParticipants;
    }
    ngOnInit() {
    }

    displayOptions() {
        console.log('displayOptions clicked');
    }
}