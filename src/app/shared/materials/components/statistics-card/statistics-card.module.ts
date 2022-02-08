import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { StatisticsCardComponent } from './statistics-card.component';


@NgModule({
  declarations: [StatisticsCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    StatisticsCardComponent
  ]
})
export class StatisticsCardModule { }
