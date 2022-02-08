import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TriviaComponent} from './trivia.component';



@NgModule({
  declarations: [TriviaComponent],
  imports: [
    CommonModule,
      IonicModule,
      FormsModule
  ],
  exports: [
      TriviaComponent
  ]
})
export class TriviaModule { }