import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IIssues} from '../../../interfaces/issues';

@Component({
    selector: 'app-recent-issues',
    templateUrl: './recent-issues.component.html',
    styleUrls: ['./recent-issues.component.scss'],
})
export class RecentIssuesComponent implements OnInit {
    @Input() solvedIssues: Array<IIssues> = [];

    constructor(private route: Router) {
    }

    get title() {
        return (issue) => issue.title;
    }

    get content() {
        return (issue) => issue.body;
    }

    get author() {
        return (issue) => issue.author;
    }

    proceedTo(issueId) {
        this.route.navigate(['solved-issue'], {state: {issueId}}).then(resp => resp ? console.log('Done') : '');
    }

    ngOnInit() {
    }

}