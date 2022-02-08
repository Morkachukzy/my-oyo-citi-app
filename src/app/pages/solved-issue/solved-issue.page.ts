import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-solved-issue',
  templateUrl: './solved-issue.page.html',
  styleUrls: ['./solved-issue.page.scss'],
})
export class SolvedIssuePage implements OnInit {
  issue: any = {
    title: ``,
    body: ``,
    author: ``,
  };
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
    this.issue= this.route.getCurrentNavigation().extras.state.issue;
  }

}