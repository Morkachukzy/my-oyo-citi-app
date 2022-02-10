import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

//INTERFACES
import {ICase} from '../../shared/interfaces/case';

//TEST SERVERS
import dummyCaseServer from '../../shared/server/dummyCaseServer';

@Component({
    selector: 'app-case',
    templateUrl: './case.page.html',
    styleUrls: ['./case.page.scss'],
})
export class CasePage implements OnInit {
//TODO: rename issue to issueId and use that ID to fetch the post from the database

    caseId: number;
    case: ICase = {
        details: {
            id: null,
            image: ``,
            title: ``,
            // eslint-disable-next-line max-len
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

    get title() {
        return this.case.details.title;
    }

    get content() {
        return this.case.details.body;
    }

    get author() {
        return this.case.details.author;
    }

    ngOnInit() {
        this.setCaseId();
        this.setCase();
        console.log(this.case);
    }

    setCaseId() {
        this.caseId = history.state.caseId;
    }

    //Fetch and set selected case from server
    fetchCase(id) {
        //TODO: fetch case with props caseId passed
        return dummyCaseServer.find(_case => _case.details.id === id);
    }

    setCase() {
        const currentCase = this.fetchCase(this.caseId);
        if (currentCase !== undefined) {
            this.case = currentCase;
        }
    }

}