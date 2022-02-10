import {Component, Input, OnInit} from '@angular/core';
import {ICase} from '../../../interfaces/case';
import {Router} from '@angular/router';

@Component({
    selector: 'app-case',
    templateUrl: './case.component.html',
    styleUrls: ['./case.component.scss'],
})
export class CaseComponent implements OnInit {
    @Input() case: ICase = {
        details: {
            id: 1,
            image: ``,
            title: ``,
            body: ``,
            author: ``,
            location: ``,
            department: ``,
            type: ``,
            feedback: {
                views: 0,
                likes: 0,
                comments: 0
            },
            timeCreated: ``
        },
        status: ``,
    };

    constructor(private route: Router) {
    }

    get caseImageUrl() {
        return this.case.details.image;
    }

    get imageStyle() {
        return this.hasImage ?
            `background: lightblue url(${this.caseImageUrl}) center/cover no-repeat;` :
            `background: lightblue  center/cover no-repeat fixed;`;
        // `background: lightblue  center/cover no-repeat fixed;`;
    }

    get hasImage() {
        return this.case.details.image !== ``;
    }

    get caseId() {
        return this.case.details.id;
    }

    get caseTitle() {
        return this.case.details.title;
    }

    get caseLocation() {
        return this.case.details.location;
    }

    get hasStatus() {
        return this.case.hasOwnProperty('status');
    }

    get caseStatus() {
        if (this.case.hasOwnProperty('status')) {
            return this.case.status;
        }
    }

    get caseDepartment() {
        return this.case.details.department;
    }

    get caseType() {
        return this.case.details.type;
    }

    get noOfCaseViews() {
        return this.case.details.feedback.views;
    }

    get noOfCaseComments() {
        return this.case.details.feedback.comments;
    }

    get noOfCaseLikes() {
        return this.case.details.feedback.likes;
    }

    get timeCreated() {
        return this.case.details.timeCreated;
    }

    get caseContent() {
        return this.case.details.body;
    }

    ngOnInit() {
    }


    proceedTo(caseId) {
        this.route.navigate(['case'], {state: {caseId}}).then(resp => resp ? console.log('Done') : '');
    }

}