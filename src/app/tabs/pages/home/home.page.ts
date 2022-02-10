import {Component, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import SwiperCore, {Navigation, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade, Swiper} from 'swiper';
import {Router} from '@angular/router';
import {IPoll} from '../../../shared/interfaces/poll';
import {IAllocationStatistic} from '../../../shared/interfaces/allocationStatistic';
import {IIssues} from '../../../shared/interfaces/issues';
SwiperCore.use([Navigation, Autoplay, Keyboard, Pagination, Scrollbar, Zoom, EffectFade]);

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
    sliderImagesUrls: Array<string> = [
        'assets/images/banner1.jpg',
        'assets/images/banner2.jpg',
        'assets/images/banner3.jpg',
    ];
    totalAllocationStats: Array<IAllocationStatistic> = [
        {
            title: 'Oyo State February 2021 Allocation',
            amount: 5335217301.15,
            link: {
                name: `See All Federal Allocation`,
                path: `/federal-allocation` //TODO: Set links up
            }
        },
        {
            title: 'Afijio LGA February 2021 Allocation',
            amount: 145657337.75,
            link: {
                name: 'See All Local Govt. Allocation',
                path: 'local-government-allocation'
            }
        },
    ];

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

    recentlySolvedIssues: Array<IIssues> = [
        {
            id: 1,
            title: `This shouldn't be the state of the just repaired stadium`,
            // eslint-disable-next-line max-len
            body: `Good day Oyo State. Good day GSM. Good day Good People. I am a good supporter of Mr GSM and I can't be part to political propaganda. This is the picture sent to me recently and I confirmed it to be true. How could this now be the state of the field despite the huge amount spent to renovate it. I want to call the attention of the governor and those in power/government to this so as to shut the mouth of propagandists. Kindly see the attached and confirm it. Thank you. Merry ChristmasHappy New Year in Advance.`,
            author: `Adewale Joseph`
        },
        {
            id: 2,
            title: `Bad and Immoral Public Advert Spotted`,
            // eslint-disable-next-line max-len
            body: `This billboard is in Bodija just after Bovas Head Office, along Awolowo to secretariat road, Ibadan. The advertisement is immoral and lacks social ethics and thus is scandalous, barbaric, odoriferous, and shows a failure of the regulatory office concerns. What a shame.`,
            author: `Alabi James Ogunwale`
        },
        {
            id: 3,
            title: `Tax clearance issues`,
            // eslint-disable-next-line max-len
            body: `I have serious challenges getting my P.A.Y.E tax clearance from Oyo State tax office. I am being tossed between the tax office and my employer for money that has been deducted from my salary long ago. My concerns are: 1. My colleagues in the same company in Lagos do not go through any stress to have their tax clearance. 2. It signals a possibility that even the company might not be doing it right but maybe some people within government are profiteering hence look the other way while the state looses revenue. 3. Why has government not automated some of these processes thereby increase IGR for the state. 4. Is there any email or phone number that I can reach if I am having issues with my tax clearance to have it resolved without paying bribes. Please help.`,
            author: `Idowu Adebayo`
        },
    ];

    trivia: object = {
        question: `Who is the first Female Secretary to the State government of Oyo state?`,
        noOfParticipants: 351,
    };

    constructor(private route: Router) {
    }

    ngOnInit() {
        this.setCurrentPoll();
    }

    setCurrentPoll() {
        this.currentPoll = {
            question: `Do you think Gov. Makinde is handling the current security  ell situation in Oyo state?
    If no, what do you advise?`,
            result: {
                positive: {
                    remark: 'Yes, he is trying his best',
                    count: 290
                },
                negative: {
                    remark: 'No, he is not doing well',
                    count: 370
                }
            }
        };

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