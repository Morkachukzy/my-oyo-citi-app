import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {MaterialsModule} from '../../../shared/materials/materials.module';
import {PipeModule} from '../../../shared/pipe.module';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, MaterialsModule, PipeModule ], declarations: [HomePage,],
})
export class HomePageModule {
}