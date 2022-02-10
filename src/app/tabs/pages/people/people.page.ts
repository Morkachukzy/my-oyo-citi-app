import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ICase} from '../../../shared/interfaces/case';
import {IonInfiniteScroll} from '@ionic/angular';
import dummyCasesServer from '../../../shared/server/dummyCaseServer';

@Component({
    selector: 'app-people',
    templateUrl: './people.page.html',
    styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit, AfterViewInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    pageNumber = 0;
    pageLimit = 3;
    isEndOfPage = false;

    cases: Array<ICase> = [];


    constructor() {
    }

    ngOnInit() {
        //TODO: initial fetch with page number * pageLimit being the  passed as the starting index and returns the  next chunk
        this.loadData(null);
    }

    ngAfterViewInit() {
        this.infiniteScroll.disabled = false;
    }

    loadData(event) {
        const fetchedData = this.fetchCasesChunks();
        //TODO: remove the timeout and replace with a async fetch

        setTimeout(() => {
            if (fetchedData.length) {
                this.cases.push(...fetchedData);
                this.pageNumber++;
            } else {
                this.isEndOfPage = true;
                console.log(this.isEndOfPage);
            }
            event?.target?.complete();
        }, 1000);
    }


    fetchCasesChunks() {
        const start = this.pageNumber * this.pageLimit;
        const end = start + this.pageLimit;
        return dummyCasesServer.slice(start, end);
    }
}