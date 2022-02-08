import {Component, Input, OnInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class StatisticsCardComponent implements OnInit {
  @Input() stat: object = {};

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  proceedTo(path){
    this.route.navigate([path], { state: { id:1 , name:'Angular' } }).then(resp => resp ? console.log('Done') : '');
  }

}