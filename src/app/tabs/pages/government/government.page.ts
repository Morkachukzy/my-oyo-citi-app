import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';

//INTERFACES
import {IPost} from '../../../shared/interfaces/post';

//TEST SERVERS
import dummyPostsServer from '../../../shared/server/dummyPostServer';

@Component({
    selector: 'app-government',
    templateUrl: './government.page.html',
    styleUrls: ['./government.page.scss'],
})
export class GovernmentPage implements OnInit, AfterViewInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    pageNumber = 0;
    pageLimit = 3;
    isEndOfPage = false;

    posts: Array<IPost> = [];


    ngOnInit() {
        //TODO: initial fetch with page number * pageLimit being the  passed as the starting index and returns the  next chunk
        this.loadData(null);
    }

    ngAfterViewInit() {
        this.infiniteScroll.disabled = false;
    }

    loadData(event) {
        const fetchedData = this.fetchPostsChunks();
        //TODO: remove the timeout and replace with a async fetch

        setTimeout(() => {
            if (fetchedData.length) {
                this.posts.push(...fetchedData);
                this.pageNumber++;
            } else {
                this.isEndOfPage = true;
                console.log(this.isEndOfPage);
            }
            event?.target?.complete();
        }, 1000);
    }

    fetchPostsChunks() {
        const start = this.pageNumber * this.pageLimit;
        const end = start + this.pageLimit;
        return dummyPostsServer.slice(start, end);
    }
}