import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ICase} from '../../../interfaces/case';

@Component({
    selector: 'app-recent-issues',
    templateUrl: './recent-issues.component.html',
    styleUrls: ['./recent-issues.component.scss'],
})
export class RecentIssuesComponent implements OnInit {
    @Input() solvedIssues: Array<ICase> = [];

    constructor(private route: Router) {
    }

    get title() {
        return (issue) => issue.details.title;
    }

    get content() {
        return (issue) => issue.details.body;
    }

    get author() {
        return (issue) => issue.details.author;
    }

    proceedTo(caseId) {
        this.route.navigate(['case'], {state: {caseId}}).then(resp => resp ? console.log('Done') : '');
    }

    ngOnInit() {
        console.log(this.solvedIssues);
    }

}