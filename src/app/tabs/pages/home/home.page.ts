import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, EffectFade, Keyboard, Navigation, Pagination, Scrollbar, Zoom} from 'swiper';
import {Router} from '@angular/router';

//Interfaces
import {IPoll} from '../../../shared/interfaces/poll';
import {IAllocationStatistic} from '../../../shared/interfaces/allocationStatistic';
import {ICase} from '../../../shared/interfaces/case';
import {ITrivia} from '../../../shared/interfaces/trivia';

//TEST SERVERS
import dummyCasesServer from '../../../shared/server/dummyCaseServer';
import poll from '../../../shared/server/pollServer';
import trivia from '../../../shared/server/triviaServer';
import allocationStats from '../../../shared/server/allocationStatisticsServer';
import imagesUrls from '../../../shared/server/sliderImageServer';

SwiperCore.use([Navigation, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade]);

//Theme Toggle
const toggleTheme = () => {
    const toggle: any = document.querySelector('#theme-toggle');
// Listen for the toggle check/uncheck to toggle the dark class on the <body>
    toggle?.addEventListener('ionChange', (ev) => {
        document.body.classList.toggle('dark', ev.detail.checked);
        console.log(toggle.checked);
        return toggle.checked;
    });
};


window.onload = () => {
    toggleTheme();
};


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    encapsulation: ViewEncapsulation.None
})


export class HomePage implements OnInit {
    quickActions: Array<object> = [
        {
            title: 'Report A Problem',
            icon: 'megaphone',
            color: 'yellow'
        },
        {
            title: 'See Projects',
            icon: 'stats-chart',
            color: 'red'
        },
        {
            title: 'Government Actions',
            icon: 'eye',
            color: 'blue'
        },
        {
            title: 'Citizens Reports',
            icon: 'warning',
            color: 'green'
        },
        // {
        //     title: 'Federal Allocations',
        //     icon: 'gift'
        // },
        // {
        //   title: 'Report A Problem',
        //   icon: 'megaphone-outline'
        // },
        // {
        //   title: 'Report A Problem',
        //   icon: 'megaphone-outline'
        // },
        // {
        //   title: 'Report A Problem',
        //   icon: 'megaphone-outline'
        // },
    ];
    searchValue = ``;
    darkMode = `light`;

    sliderImagesUrls: Array<string> = [];
    totalAllocationStats: Array<IAllocationStatistic> = [];
    currentPoll: IPoll = {
        question: ``,
        result: {
            positive: {
                remark: ``,
                count: 0,
            },
            negative: {
                remark: ``,
                count: 0,
            }
        }
    };
    recentlySolvedIssues: Array<ICase> = [];
    trivia: ITrivia = {
        question: ``,
        noOfParticipants: 0,
    };

    constructor(private route: Router) {
    }

    ngOnInit() {
        this.setCurrentPoll();
        this.setSolvedIssues();
        this.setTrivia();
        this.setTotalAllocationStats();
        this.setSliderImages();
    }

    //Fetch and set recently solved Issues from the server
    fetchSolvedIssues(status) {
        //TODO: fetch solved issues by passing solved as a query and returning only solved issues
        return dummyCasesServer.filter(_case => _case.status === status);
    }

    setSolvedIssues() {
        const solvedIssues: Array<ICase> = this.fetchSolvedIssues(`SOLVED`);
        if (solvedIssues !== undefined) {
            this.recentlySolvedIssues = solvedIssues;
        }
    }


    //Fetch and set current poll from the server
    fetchCurrentPoll() {
        //TODO: fetch current poll from server
        return poll;
    }

    setCurrentPoll() {
        const fetchedPoll: IPoll = this.fetchCurrentPoll();
        if (fetchedPoll !== undefined) {
            this.currentPoll = fetchedPoll;
        }
    }


    //Fetch and set trivia from the server
    fetchTrivia() {
        //TODO: fetch trivia from the server
        return trivia;
    }

    setTrivia() {
        const currentTrivia = this.fetchTrivia();
        if (currentTrivia !== undefined) {
            this.trivia = currentTrivia;
        }
    }


    //Fetch and set allocation statistics from the server
    fetchTotalAllocationStats() {
        //TODO: fetch allocation statistics from the server
        return allocationStats;
    }

    setTotalAllocationStats() {
        const totalAllocationStats = this.fetchTotalAllocationStats();
        if (totalAllocationStats !== undefined) {
            this.totalAllocationStats = totalAllocationStats;
        }
    }


    //Fetch and set trivia from the server
    fetchSliderImages() {
        //TODO: fetch slider image urls from the server
        return imagesUrls;
    }

    setSliderImages() {
        const sliderImagesUrls = this.fetchSliderImages();
        if (sliderImagesUrls !== undefined) {
            this.sliderImagesUrls = sliderImagesUrls;
        }
    }


    cancel() {
        return this.searchValue === ``;
    }

    searchFor(newSearchValue) {
        this.searchValue = newSearchValue;
        console.log(this.searchValue);
    }

    goToPollPage(path) {
        this.route.navigate([path]).then(resp => resp ? console.log('Done') : '');
    }

    toggleTheme() {
        this.darkMode = this.darkMode === 'light' ? 'dark' : 'light';
        console.log(this.darkMode);
    }
}