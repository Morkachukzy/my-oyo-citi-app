import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { MatInputModule } from '@angular/material/input';

import {SearchBarComponent} from './search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatInputModule
  ],
  exports:[
    SearchBarComponent
  ]
})
export class SearchBarModule {
}
