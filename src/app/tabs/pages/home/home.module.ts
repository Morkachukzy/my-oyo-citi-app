import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HomePageRoutingModule} from './home-routing.module';
import {HomePage} from './home.page';
import {MaterialsModule} from '../../../shared/materials/materials.module';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, MaterialsModule, ], declarations: [HomePage,],
})
export class HomePageModule {
}
