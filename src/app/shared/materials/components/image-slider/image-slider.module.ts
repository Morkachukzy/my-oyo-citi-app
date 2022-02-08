import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {SwiperModule} from 'swiper/angular';

import {ImageSliderComponent} from './image-slider.component';

@NgModule({
  declarations: [ImageSliderComponent],
  imports: [
    CommonModule,
    SwiperModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
