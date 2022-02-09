import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {CaseComponent} from './case.component';


@NgModule({
  declarations: [CaseComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [CaseComponent]
})
export class CaseModule {
}