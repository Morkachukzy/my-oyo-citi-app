import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-quick-action',
  templateUrl: './quick-action.component.html',
  styleUrls: ['./quick-action.component.scss'],
})
export class QuickActionComponent implements OnInit {
  @Input() quickAction: object = {};

  mainActions: Array<object> = [
    {
      title: 'Report A Problem',
      icon: 'megaphone-outline',
      color: 'yellow'
    },
    {
      title: 'See Projects',
      icon: 'stats-chart-outline',
      color: 'red'
    },
    {
      title: 'Government Actions',
      icon: 'eye-outline',
      color: 'blue'
    },
    {
      title: 'Citizens Reports',
      icon: 'warning-outline',
      color: 'green'
    },
    {
      title: 'Federal Allocations',
      icon: 'gift-outline'
    },
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
  constructor() { }

  ngOnInit() {}

}
