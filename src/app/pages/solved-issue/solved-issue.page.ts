import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IIssues} from '../../shared/interfaces/issues';

@Component({
    selector: 'app-solved-issue',
    templateUrl: './solved-issue.page.html',
    styleUrls: ['./solved-issue.page.scss'],
})
export class SolvedIssuePage implements OnInit {
    //TODO: rename issue to issueId and use that ID to fetch the post from the database
    issueId: number;
    issue: IIssues = {
        id: null,
        title: ``,
        body: ``,
        author: ``,
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
    ]; //TODO: redundant. This will be replaced by a GET call in the init function
    constructor(private route: Router) {
        console.log(this.route.getCurrentNavigation().extras.state);

    }

    get title() {
      return this.issue.title;
    }

    get content() {
      return this.issue.body;
    }

    get author() {
      return this.issue.author;
    }

    ngOnInit() {
        console.log(history.state);
        console.log(this.route.getCurrentNavigation().extras.state.issue);
        this.issueId = history.state.issueId;
        this.getCurrentIssue();
    }

    getCurrentIssue() {
        //TODO: replace with a fetch query
        console.log(this.issueId);
        this.issue = this.recentlySolvedIssues.find(issue => issue.id === this.issueId);
    }
}