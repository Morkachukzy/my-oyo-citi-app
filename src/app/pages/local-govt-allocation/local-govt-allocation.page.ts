import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-local-govt-allocation',
  templateUrl: './local-govt-allocation.page.html',
  styleUrls: ['./local-govt-allocation.page.scss'],
})
export class LocalGovtAllocationPage implements OnInit {

  constructor(private route: Router) {
    console.log(this.route.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    console.log(history.state);
  }
}